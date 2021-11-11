import React from 'react';

export interface CheckBoxProps
  extends Omit<React.ComponentPropsWithoutRef<'input'>, 'label' | 'type'> {
  label: React.ReactNode;
  id: string;
  ['aria-label']: string;
}
