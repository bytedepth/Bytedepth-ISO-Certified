/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, TrendingUp, Sparkles, Calculator, Search, ShieldCheck } from 'lucide-react';

export interface ToastMessage {
  id: string;
  title: string;
  message: string;
  type: 'success' | 'info' | 'warning' | 'calculator' | 'seo';
  duration: number;
}

type ToastCallback = (detail: {
  title: string;
  message: string;
  type: 'success' | 'info' | 'warning' | 'calculator' | 'seo';
  duration: number;
}) => void;

const listeners = new Set<ToastCallback>();

// Global helper to trigger a toast from anywhere in the application
export function showToast(
  title: string,
  message: string,
  type: 'success' | 'info' | 'warning' | 'calculator' | 'seo' = 'info',
  duration = 4000
) {
  listeners.forEach((listener) => {
    try {
      listener({ title, message, type, duration });
    } catch (err) {
      console.error('Error executing toast listener:', err);
    }
  });
}

export default function ToastContainer() {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  useEffect(() => {
    const handleToast = (detail: {
      title: string;
      message: string;
      type: 'success' | 'info' | 'warning' | 'calculator' | 'seo';
      duration: number;
    }) => {
      const { title, message, type, duration } = detail;
      const newToast: ToastMessage = {
        id: Math.random().toString(36).substring(2, 9),
        title,
        message,
        type,
        duration
      };

      setToasts((prev) => {
        // Limit the maximum number of simultaneous toasts to 3 for clean visual layout
        const updated = [...prev, newToast];
        if (updated.length > 3) {
          return updated.slice(updated.length - 3);
        }
        return updated;
      });
    };

    listeners.add(handleToast);
    return () => {
      listeners.delete(handleToast);
    };
  }, []);

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const getToastStyles = (type: string) => {
    switch (type) {
      case 'success':
        return {
          border: 'border-emerald-500/30',
          bg: 'bg-slate-900/95',
          icon: <CheckCircle2 className="w-5 h-5 text-emerald-400" />,
          accent: 'bg-emerald-500'
        };
      case 'calculator':
        return {
          border: 'border-amber-500/30',
          bg: 'bg-slate-900/95',
          icon: <Calculator className="w-5 h-5 text-amber-400" />,
          accent: 'bg-amber-500'
        };
      case 'seo':
        return {
          border: 'border-blue-500/30',
          bg: 'bg-slate-900/95',
          icon: <Search className="w-5 h-5 text-blue-400" />,
          accent: 'bg-blue-500'
        };
      case 'warning':
        return {
          border: 'border-rose-500/30',
          bg: 'bg-slate-900/95',
          icon: <ShieldCheck className="w-5 h-5 text-rose-400" />,
          accent: 'bg-rose-500'
        };
      case 'info':
      default:
        return {
          border: 'border-indigo-500/30',
          bg: 'bg-slate-900/95',
          icon: <Sparkles className="w-5 h-5 text-indigo-400" />,
          accent: 'bg-indigo-500'
        };
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-sm w-full px-4 sm:px-0 pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => {
          const styles = getToastStyles(toast.type);
          return (
            <ToastItem
              key={toast.id}
              toast={toast}
              styles={styles}
              onClose={() => removeToast(toast.id)}
            />
          );
        })}
      </AnimatePresence>
    </div>
  );
}

interface ToastItemProps {
  key?: string;
  toast: ToastMessage;
  styles: {
    border: string;
    bg: string;
    icon: ReactNode;
    accent: string;
  };
  onClose: () => void;
}

function ToastItem({ toast, styles, onClose }: ToastItemProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, toast.duration);

    return () => clearTimeout(timer);
  }, [toast.duration, onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.15 } }}
      transition={{ type: 'spring', stiffness: 380, damping: 28 }}
      className={`pointer-events-auto w-full rounded-2xl ${styles.bg} border ${styles.border} shadow-2xl p-4 flex flex-col gap-3 overflow-hidden backdrop-blur-md`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="p-1.5 rounded-lg bg-slate-850 border border-slate-800">
            {styles.icon}
          </div>
          <div>
            <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block leading-none mb-1">
              {toast.type === 'calculator' ? 'ROI Recalculated' : toast.type === 'seo' ? 'SEO System Alert' : 'Staging Notification'}
            </span>
            <h5 className="text-sm font-bold text-white tracking-tight">{toast.title}</h5>
          </div>
        </div>
        <button
          onClick={onClose}
          className="text-slate-400 hover:text-white transition cursor-pointer p-0.5"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <p className="text-xs text-slate-300 leading-relaxed pl-1">{toast.message}</p>

      {/* Progress animation bar */}
      <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: '100%' }}
          animate={{ width: '0%' }}
          transition={{ duration: toast.duration / 1000, ease: 'linear' }}
          className={`h-full ${styles.accent}`}
        />
      </div>
    </motion.div>
  );
}
