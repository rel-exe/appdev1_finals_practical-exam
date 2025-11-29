export default function ThemeSelector({ theme, changeTheme }) {
  return (
    <>
      <div className="standard-theme theme-selector" onClick={() => changeTheme('standard')}></div>
      <div className="light-theme theme-selector" onClick={() => changeTheme('light')}></div>
      <div className="darker-theme theme-selector" onClick={() => changeTheme('darker')}></div>
    </>
  );
}
