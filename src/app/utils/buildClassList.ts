interface ArgProps {
  classes: Array<string | number | undefined | null>;
}

export const buildClassList = (...classes: ArgProps['classes']) => {
  return classes.filter(Boolean).join(' ');
};