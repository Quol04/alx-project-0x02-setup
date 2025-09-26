
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
  children?: React.ReactNode;
  onClick?: () => void;
}

export interface PostProps {
  title: string;
  content: string;
  userID: number;
  id: number;
}

export interface PostPageProps{
  posts: PostProps[];
}