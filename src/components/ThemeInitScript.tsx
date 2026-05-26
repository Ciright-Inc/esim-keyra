export function ThemeInitScript() {
  const script = `(function(){try{var t=localStorage.getItem('esim-keyra-theme');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t);return;}var d=window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.setAttribute('data-theme',d?'dark':'light');}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`;
  return (
    <script
      dangerouslySetInnerHTML={{ __html: script }}
      suppressHydrationWarning
    />
  );
}
