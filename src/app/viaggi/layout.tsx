import ViaggioScrollToTop from '@/components/viaggi/ViaggioScrollToTop';

export default function ViaggiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <ViaggioScrollToTop />
    </>
  );
}
