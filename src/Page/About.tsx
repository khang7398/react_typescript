import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { abouts } from '../data/About';

export default function About() {
  const Params = useParams<{ aboutId: string }>();
  const Navigate = useNavigate();

  useEffect(() => {
    if (!about) {
      Navigate('..');
    }
  }, [abouts]);
  const about = abouts.find((item) => item.id.toString() === Params.aboutId);
  return (
    <h2 style={{ padding: '1rem' }}>
      About #{about?.id} for {about?.name}
    </h2>
  );
}
