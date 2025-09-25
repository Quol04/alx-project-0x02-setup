
export interface CardProps {
  title: string;
  content: string;
}

export interface PostModalProps {
  onSubmit: (post: CardProps) => void;
  onClose: () => void;
}


