export const cn = (values: Record<string, boolean>) =>
  Object.entries(values)
    .filter(([, isActive]) => isActive)
    .map(([classname]) => classname)
    .join(' ')
