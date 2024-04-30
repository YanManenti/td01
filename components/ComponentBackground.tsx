function ComponentBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full bg-white rounded-xl p-8">{children}</div>
  );
}

export default ComponentBackground;
