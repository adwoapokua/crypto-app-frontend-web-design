export default function FooterColumn({ title, links }) {
  return (
    <div className="mb-6">
      <h4 className="font-semibold text-gray-900 mb-3">
        {title}
      </h4>

      <ul className="space-y-2 text-gray-600 text-sm">
        {links.map((link, index) => (
          <li
            key={index}
            className="hover:text-black cursor-pointer"
          >
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
}