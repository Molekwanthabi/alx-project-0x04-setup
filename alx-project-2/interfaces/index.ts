// Card Component Props
export interface CardProps {
  title: string;
  content: string;
}

// Button Component Props
export interface ButtonProps {
  label: string;
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
  onClick?: () => void;
}

// Post Component Props
export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// User Component Props
export interface UserProps {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
  };
}
