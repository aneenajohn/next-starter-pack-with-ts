// componentLibrary.d.ts
declare global {
  namespace version {
    const Button: React.ComponentType<{
      variant: 'primary' | 'secondary';
      children: React.ReactNode;
    }>;
  }
}

export {};
