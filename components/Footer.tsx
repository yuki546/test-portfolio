export default function Footer() {
  return (
    <footer className="text-brand-secondary flex justify-center gap-3 py-2 text-xs sm:py-3">
      <div className="">
        {new Date().getFullYear()} &copy; My Portfolio. All rights reserved.
      </div>
    </footer>
  );
}
