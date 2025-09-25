
export interface CardProps {
  title: string;
  content: string;
}

export interface PostModalProps {
  onSubmit: (post: CardProps) => void;
  onClose: () => void;
}

export interface ButtonProps {
  size: 'small' | 'medium' | 'large';
  shape: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  // onClick: () => void;
}
