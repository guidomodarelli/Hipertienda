interface TypographyH1Props extends React.PropsWithChildren {}

export function TypographyH1({ children }: TypographyH1Props) {
  return <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-8">{children}</h1>;
}
