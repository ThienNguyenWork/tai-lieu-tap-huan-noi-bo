// FIX: To resolve "Cannot find namespace 'JSX'", import a React-specific type.
// `ReactNode` is a suitable type for props that accept JSX elements.
import type { ReactNode } from 'react';

export interface MenuItem {
  id: string;
  label: string;
  icon: (isActive: boolean) => ReactNode;
}

export interface ChatMessage {
  role: 'user' | 'model' | 'error';
  text: string;
}