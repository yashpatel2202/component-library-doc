

type DocStatusType = 'done' | 'in-progress' | 'waiting';

export function DocStatus({ status }: { status: DocStatusType }) {
  if (status === 'done') return null;

  const isProgress = status === 'in-progress';

  return (
    <div className={`
      w-full px-3  mb-8 rounded-lg border
      ${isProgress 
        ? 'bg-blue-50/50 border-blue-200/60 text-blue-900 dark:bg-blue-500/10 dark:border-blue-500/20 dark:text-blue-100' 
        : 'bg-amber-50/50 border-amber-200/60 text-amber-900 dark:bg-amber-500/10 dark:border-amber-500/20 dark:text-amber-100'
      }
    `}>
      <h4 className="font-semibold text-xs uppercase tracking-wider opacity-90">
        {isProgress ? 'Active Development' : 'Planned Update'}
      </h4>

      <p className="text-[13px] opacity-80 leading-relaxed mt-1">
        {isProgress 
          ? 'This documentation is actively being managed and refined.'
          : 'This module is in the queue for a documentation refresh.'
        }
      </p>
    </div>
  );
}
