import * as React from 'react';
import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import QRCode from 'qrcode.react';

import './App.css'
function Qr(){

    const [url, setUrl] = useState("");
    const [qrIsVisible, setQrIsVisible] = useState(false);
    const QrCodeGenerate = () => {
      if (!url) {
        return;
      }
      setQrIsVisible(true);
    };
    
    const [open, setOpen] = React.useState(false);

    return(
    <>
    <div className='main'>
        <header class="typewriter">
            <TypeAnimation
            sequence={["QR Code Generator",2000,"Simple",1000,"Easy",1000,"Fast",1000,]}
            speed={50}
            repeat={Infinity}
            className='Type'
            style={{ fontSize: '10vh' }}
            />
        </header>
        <section>
            <div>
            <input 
            type="text" 
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            id="input" className='input' placeholder='Enter Text'
            />
            </div>
            <div>
            <button variant="outlined" color="neutral" onClick={() => { QrCodeGenerate(); setOpen(true); }}>
            <span class="span-mother">
            <span>G</span>
            <span>e</span>
            <span>n</span>
            <span>e</span>
            <span>r</span>
            <span>a</span>
            <span>t</span>
            <span>e</span>
            </span>
            <span class="span-mother2">
            <span>G</span>
            <span>e</span>
            <span>n</span>
            <span>e</span>
            <span>r</span>
            <span>a</span>
            <span>t</span>
            <span>e</span>
            </span>
            </button>
            </div>
        </section>
    </div>
    <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 500,
            borderRadius: 'md',
            p: 3,
            boxShadow: 'lg',
          }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
            mb={1}
          >
            {url}
            <hr/>
          </Typography>
          <Typography id="modal-desc" textColor="text.tertiary">
            {qrIsVisible && (
          <div className="qrcode__download">
            <div className="qrcode__image">
              <QRCode value={url} size={300} />
            </div>
          </div>
        )}
          </Typography>
        </Sheet>
      </Modal>
    </>
    )
}
export default Qr;