import React from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import {CircleAlertIcon} from 'lucide-react';

export function TimeoutAlert({
  message,
  onClose,
  show = false,
  duration = 3000,
}: {
  show: boolean;
  message?: string;
  onClose?: () => void;
  duration: number;
}) {
  const [visible, setVisible] = React.useState(show);

  React.useEffect(() => {
    setVisible(show);
    const timer = setTimeout(() => {
      setVisible(false);
      if (onClose) onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose, show]);

  //   if (visible) return null;

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          layout
          initial={{
            height: 0,
          }}
          animate={{height: 'auto'}}
          exit={{height: 0}}
          transition={{
            duration: 0.05,
            ease: 'easeInOut',
          }}
          className="overflow-hidden"
        >
          <div className="flex items-center gap-1 rounded-lg bg-rose-50 p-3 text-body-small text-rose-500">
            <CircleAlertIcon className="size-4 text-rose-500" />
            <p className="leading-none text-rose-500">{message}</p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
