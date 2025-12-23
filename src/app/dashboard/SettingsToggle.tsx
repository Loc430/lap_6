'use client';
import { useState } from 'react';

export default function SettingsToggle() {
  const [dark, setDark] = useState(false);

  return (
    <button onClick={() => setDark(!dark)}>
      Mode: {dark ? 'Dark' : 'Light'}
    </button>
  );
}
