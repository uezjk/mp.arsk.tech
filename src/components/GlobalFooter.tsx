export default function GlobalFooter() {
  return (
    <footer class="mt-auto mx-auto flex gap-4 text-sm">
      <a
        href="https://www.energytrust.com.cn/?utm_source=mp.arsk.tech"
        target="_blank"
        class="text-gray-400 border-b border-dashed"
      >
        &copy; {new Date().getFullYear()} 安瑞信杰数字科技
      </a>
    </footer>
  );
}
