export default function Transition({ children, expanded }) {
  return (
    <div
      className="transition"
      style={{
        height: expanded ? "100px" : 0, // note not having fixed height causes transition to break
        overflow: "hidden",
        transitionDuration: "1000ms",
        transition: "height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      }}
    >
      {children}
    </div>
  );
}
