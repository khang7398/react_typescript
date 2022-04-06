import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { homes } from '../data/Home';

export default function Home() {
  const params = useParams<{ homeId: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!home) {
      navigate('..');
    }
  }, [homes]);

  const home = homes.find((item) => item.id.toString() === params.homeId);
  return (
    <h2 style={{ padding: '1rem' }}>
      Home #{home?.id} for {home?.name}
    </h2>
  );
}
