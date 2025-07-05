'use client';
import { useEffect, useState } from 'react';
import { FramerModal, ModalContent } from './dialog';
import { NavLink } from 'react-router-dom';
import { useIdleTimer } from 'react-idle-timer';


export default function Modal() {
  const [modalOpen, setModalOpen] = useState(false);
  const [timeVal, setTimeVal] = useState<number>();

  const { getRemainingTime } = useIdleTimer({
    timeout: 1000 * 10,
    throttle: 500,
    crossTab: true
  })


  useEffect(() => {
    setInterval(() => {
      setTimeVal(getRemainingTime());
    }, 1000);
  }, []);

  useEffect(() => {
    if (timeVal!==undefined && timeVal <= 0) {
      setModalOpen(true)
    }
  }, [timeVal])


  return (
    <FramerModal open={modalOpen} setOpen={setModalOpen}>
      <ModalContent>
        <div className='flex flex-col space-y-1.5 text-center sm:text-left'>
          <h2 className='text-3xl font-semibold text-center '>
            Envíanos tu requerimiento
          </h2>
          <p className='text-xl text-muted-foreground text-center'>
            Con gusto te atendemos
          </p>
        </div>
        <div className='mt-10 text-center'>
          <NavLink
            className='w-full p-3 bg-black dark:bg-white text-white dark:text-black rounded-md text-center'
            onClick={() => setModalOpen(false)}
            to="/contactanos"
          >
            ¡Vamos!
          </NavLink>
        </div>
      </ModalContent>
    </FramerModal>
  );
};