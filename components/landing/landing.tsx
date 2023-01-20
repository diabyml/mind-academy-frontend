import React from "react";
import Header from "../header/header";
import Button from '../button/button';
import Image from 'next/image';
import Footer from "../footer/footer";
import {useRouter} from 'next/router';

interface Props { }

const Landing: React.FC<Props> = ({ }) => {
  const router = useRouter();
  return (
    <>
      <Header />
      {/* hero */}
      <section className="hero">
        <div className="container max-width-md padding-y-lg">
          <div className="grid gap-lg gap-sm@sm items-center@sm">
            <div className="col-6@sm">
              <div className="text-component">
                <div className='flex items-center flow-vertical'>
                  <span className="font-semibold color-primary">Violence positive </span>
                  <div className="width-xl height-xxxxs bg-primary"></div>
                </div>
                <h1>
                  Mind Academy <br />
                  Change mentality
                </h1>
                <p className="max-width-xxxxs">
                  La Violence positive, une jeunesse forte et consciente sans violence
                </p>
                <Button variant={'accent'} handler={() => router.push('/cours')}>Voir Cours</Button>
              </div>
            </div>
            <div className="col-6@sm">
              <div className="flex items-center justify-center">
                <div className="flex justify-center hero__image-wrapper">
                  <Image className="hero__image object-contain" src={'/images/logo.jpg'} width="350px" height="350px" alt="Hero image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container max-width-md padding-y-lg">
          <div className="grid gap-md">
            <div className="col-6@sm">
              <span className="font-semibold color-primary">Que voulez-vous apprendre ?</span>
              <h2>Nos services</h2>
              <div className='flex items-center flow-vertical'>
                <span className="font-semibold color-primary">Je veux apprendre</span>
                <div className="width-xl height-xxxxs bg-primary"></div>
              </div>
            </div>
            <div className="col-6@sm">
              <p className="max-width-xxxxs">
                Nous offrons des formations en changement de Mentalité, en art Oratoire et en Business
              </p>
              <ServiceIcons />
            </div>
          </div>
        </div>
      </section>
      <section className="intro">
        <div className="container max-width-md padding-y-lg">
          <div className="grid gap-lg gap-sm@sm items-center@sm">
            <div className="col-6@sm">
              <div className="text-component">
                <h2>
                  Suivre des formations <br/>
                  Partager vos idées et expériences
                </h2>
                <p className="max-width-xxxxs">
                  {`La platforme idéale pour éveiller la conscience de la jeunesse Africaine a travers des formations et un blog sur lequel chacun pourra s'exprimer pour un dévelopement durable`}
                </p>
                <div className="flex flex-wrap gap-sm">
                  <Button variant={'primary'} handler={() => router.push('/cours')}>Voir Cours</Button>
                  <Button variant={'inverted'} handler={() => router.push('/blog/nouveau')}>{`S'exprimer`}</Button>
                </div>
              </div>
            </div>
            <div className="col-6@sm">
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center intro__image-wrapper">
                  <Image className="" src={'/images/img7.jpg'} width="350px" height="350px" alt="Hero image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="what-you-will-get">
        <div className="container max-width-md padding-y-lg">
          <div className="grid gap-lg items-center">
            <div className="col-6@sm order-2@sm">
              <div className="text-component">
                <h2>{`Qu'obtiendrez-vous?`}</h2>
                <p>Changer votre mentalité, se former dans différentes domaines pour impacter votre vie et le monde:</p>
                {/* cards */}
                <div className="flex flex-column gap-sm">

                  {/* single card */}
                  <div className="flex padding-sm shadow-md radius-md">
                    <div className="margin-right-sm">
                      <ServiceIcons variant={'mentality'}/>
                    </div>
                    <div className="text-component">
                      <h3 className="text-sm">LA MENTALITE</h3>
                      <p className="text-sm">
                        Développement personnel et Leadership
                      </p>
                    </div>
                  </div>

                  {/* single card */}
                  <div className="flex padding-sm shadow-md radius-md">
                    <div className="margin-right-sm">
                      <ServiceIcons variant={'speaking'}/>
                    </div>
                    <div className="text-component">
                      <h3 className="text-sm">ART ORATOIRE</h3>
                      <p className="text-sm">
                        Prise de parole en public, communication sociale et politique
                      </p>
                    </div>
                  </div>

                  {/* single card */}
                  <div className="flex padding-sm shadow-md radius-md">
                    <div className="margin-right-sm">
                      <ServiceIcons variant={'business'}/>
                    </div>
                    <div className="text-component">
                      <h3 className="text-sm">BUSINESS</h3>
                      <p className="text-sm">
                        {`Plan d'affaire, pitch et plan d'action`}
                      </p>
                    </div>
                  </div>


                </div>
              </div>
            </div>
            <div className="col-6@sm order-1@sm">
                <div className="radius-lg image-wrapper">
                  <Image className="" src={'/images/img7.jpg'} width="400px" height="400px" alt="Hero image" />
                </div>
            </div>
          </div>
        </div>
      </section>
      <section className="gradient-primary color-white margin-bottom-lg">
        <div className="container max-width-md padding-y-lg">
          <div className="grid gap-md items-center@sm">
            <div className="col-6@sm">
              <div className="text-component">
                <h2 className="color-white">
                  Vous voulez apprendre?
                </h2>
                <p className="max-width-xxxxs color-white">
                  {`Alors, il faut nous joindre`}
                </p>
              </div>
            </div>
            <div className="col-6@sm">
              <div className="flex items-center justify-end@sm">
                <Button handler={ () => router.push('/cours') }>Commencer</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

interface ServiceIconsProps {
  variant?: 'speaking' | 'business' | 'mentality'
}
const ServiceIcons: React.FC<ServiceIconsProps> = ({variant = 'none'}) => {
  return (
    <>
      <svg width="0" height="0" className="hidden">
        <symbol version="1.1" id="business" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" xmlSpace="preserve" viewBox="0 0 489.4 489.4">
          <g>
            <g>
              <path d="M82.9,234.3c3.1,19.9,18.4,45.2,43.7,54.1c10.3,3.6,21.7,3.7,32-0.1c24.9-9,40.7-34.2,43.8-54.1c3.3-0.3,7.7-5,12.5-21.7
            c6.5-22.9-0.4-26.3-6.2-25.7c1.1-3.2,2-6.3,2.5-9.4c9.9-59.3-19.3-61.4-19.3-61.4s-4.8-9.3-17.6-16.4c-8.5-5.1-20.4-9-36.1-7.6
            c-5.1,0.2-9.9,1.2-14.4,2.7l0,0c-5.8,2-11.1,4.8-15.8,8.1c-5.9,3.7-11.4,8.3-16.3,13.5c-7.7,7.9-14.6,18.1-17.6,30.9
            c-2.5,9.5-1.9,19.5,0.1,30.2l0,0c0.6,3.1,1.4,6.3,2.5,9.4c-5.8-0.5-12.7,2.8-6.2,25.7C75.2,229.4,79.6,234.1,82.9,234.3z"></path>
              <path d="M248.9,315.3c-34.9-13.3-55.9-27-55.9-27l-26.9,85.2l-3.7,11.6l-12.1-34.2c27.7-38.7-2.1-40.5-7.3-40.5l0,0h-0.1h-0.1
            h-0.1h-0.1l0,0c-5.2,0-35,1.9-7.3,40.5l-12.1,34.2l-3.7-11.6l-26.7-85.2c0,0-20.9,13.7-55.9,27C-1.6,329.3,0.8,361,0,420.3h142.8
            h0.3h142.7C285,361,287.4,329.3,248.9,315.3z"></path>
              <path d="M246.5,287.6c-14-24.7-10.5-56.6,10.6-77.7c17-17,41-22.6,62.7-16.7l25.4-25.4c-33.9-16.3-75.3-11.8-105.2,13.4
            c1.2,2.7,2.2,5.7,2.7,8.8c1.5,8.3,0.5,17.9-3,30.2c-3.1,10.8-6.3,18.6-10.3,24.6c-2.6,3.9-5.4,6.9-8.2,9.1
            c-1.9,6.5-4.4,12.5-7.2,18.1C220.9,275.7,232,281.5,246.5,287.6z"></path>
              <path d="M391,213.5l-25.4,25.4c5.8,21.6,0.2,45.7-16.7,62.7c-14.7,14.7-34.7,20.8-53.8,18.5c4,6,7.1,12.7,9.4,20.3
            c1.2,4.1,2.2,8.4,3,12.9c23.5-1.1,46.7-10.5,64.6-28.5C402.1,294.7,408.4,249.8,391,213.5z"></path>
              <path d="M414,190.5c29.1,49.4,22.4,113.9-20,156.3c-23.3,23.3-53.4,35.8-83.9,37.5c0.2,7.6,0.3,15.8,0.4,24.5
            c0,3.6,0.1,7.4,0.1,11.3v0.1c39.5-1.8,78.5-17.8,108.7-48c56.4-56.4,63.3-143.7,20.6-207.6L414,190.5z"></path>
              <path d="M315.8,224.6c-12.2-5-26.8-2.6-36.7,7.3c-13.2,13.2-13.2,34.5,0,47.6c13.2,13.2,34.5,13.2,47.6,0
            c9.9-9.9,12.3-24.5,7.3-36.7l96.7-96.7l16.1,2.1l42.6-42.6l-32.2-4.3l-4.3-32.2l-42.6,42.7l2.1,16.1L315.8,224.6z"></path>
              <path d="M241.2,142.8c39.6-21.6,88.1-21,127.1,2l26-26c-49.8-33.2-113.6-36.4-166.1-9.6c0.2,0.3,0.5,0.6,0.7,0.9
            C235.4,118.7,239.5,129.7,241.2,142.8z"></path>
            </g>
          </g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </symbol>
        <symbol version="1.1" id="mentality" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" xmlSpace="preserve" viewBox="0 0 77.952 77.952">
          <g>
            <g>
              <g>
                <path d="M39.194,0C23.962,0,11.418,12.32,11.418,27.776c0,20.608,14.56,23.294,15.456,34.272l0,0l0.672,6.271
              c0.896,6.05,5.824,9.634,11.424,9.634c5.824,0,10.303-3.14,11.422-9.634l0.672-6.271l0,0
              c1.121-10.978,15.457-13.664,15.457-34.272C66.971,12.544,54.428,0,39.194,0z M48.602,58.688
              c-0.672,1.793-1.344,9.187-1.344,9.187c-0.896,4.479-4.256,6.721-8.064,6.721c-7.168,0-8.064-6.721-8.064-6.721
              s-0.896-7.617-1.344-9.187c-1.12-3.358-3.808-6.942-6.272-10.08c-4.256-4.928-8.512-10.079-8.512-21.053
              C14.778,14.336,25.754,3.361,39.194,3.361c13.439,0,24.416,10.976,24.416,24.416c0,10.976-4.479,16.127-8.512,21.055
              C52.411,51.744,49.274,56.449,48.602,58.688z"></path>
                <path d="M51.291,27.104c0-0.672-0.226-1.119-0.226-1.791l4.479-4.032l-2.688-4.479l-5.6,2.016
              c-0.447-0.448-0.896-0.672-1.344-1.12l0.445-5.824L41.43,10.53l-2.686,5.377c-0.672,0-1.12,0.224-1.792,0.224l-4.032-4.48
              l-4.48,2.688l2.016,5.601c-0.448,0.447-0.896,0.896-1.12,1.344l-5.824-0.448l-1.344,4.929l5.376,2.688
              c0,0.672,0.224,1.119,0.224,1.791l-4.48,4.031l2.688,4.479l5.6-2.016c0.448,0.448,0.896,0.672,1.344,1.12l-0.448,5.824
              l4.928,1.344l2.688-5.377c0.672,0,1.119-0.222,1.791-0.222l4.033,4.479l4.479-2.688l-2.24-5.376
              c0.449-0.447,0.896-0.896,1.121-1.345l5.824,0.448l1.344-4.928L51.291,27.104z M42.332,32.93
              c-2.913,1.566-6.497,0.672-8.289-2.24s-0.672-6.496,2.24-8.288c2.912-1.792,6.495-0.673,8.286,2.239
              C46.139,27.553,45.018,31.361,42.332,32.93z"></path>
              </g>
            </g>
          </g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </symbol>
        <symbol version="1.2" baseProfile="tiny" id="speaking" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" xmlSpace="preserve" viewBox="0 0 256 256">
          <path d="M40.6,181.5c9.3,0,16.8,7.5,16.8,16.8s-7.5,16.8-16.8,16.8s-16.8-7.5-16.8-16.8S31.3,181.5,40.6,181.5z M84.5,181.5
        c9.3,0,16.8,7.5,16.8,16.8s-7.5,16.8-16.8,16.8s-16.8-7.5-16.8-16.8S75.3,181.5,84.5,181.5z M61.8,142.7c9.3,0,16.8,7.5,16.8,16.8
        c0,9.3-7.5,16.8-16.8,16.8S45,168.8,45,159.5C45,150.2,52.5,142.7,61.8,142.7z M107,142.7c9.3,0,16.8,7.5,16.8,16.8
        c0,9.3-7.5,16.8-16.8,16.8s-16.8-7.5-16.8-16.8C90.2,150.2,97.7,142.7,107,142.7z M149.7,142.7c9.3,0,16.8,7.5,16.8,16.8
        c0,9.3-7.5,16.8-16.8,16.8c-9.3,0-16.8-7.5-16.8-16.8C132.9,150.2,140.4,142.7,149.7,142.7z M192.1,142.7c9.3,0,16.8,7.5,16.8,16.8
        c0,9.3-7.5,16.8-16.8,16.8c-9.3,0-16.8-7.5-16.8-16.8C175.3,150.2,182.8,142.7,192.1,142.7z M171.7,181.5c9.3,0,16.8,7.5,16.8,16.8
        s-7.5,16.8-16.8,16.8s-16.8-7.5-16.8-16.8S162.4,181.5,171.7,181.5z M128.2,181.7c9.3,0,16.8,7.5,16.8,16.8
        c0,9.3-7.5,16.8-16.8,16.8s-16.8-7.5-16.8-16.8C111.7,189.2,119.2,181.7,128.2,181.7z M215.6,181.7c9.3,0,16.8,7.5,16.8,16.8
        c0,9.3-7.5,16.8-16.8,16.8c-9.3,0-16.8-7.5-16.8-16.8C198.8,189.2,206.3,181.7,215.6,181.7z M78.3,239.6c0-10.3-8.3-18.6-18.6-18.6
        H20.9c-10.3,0-18.6,8.3-18.6,18.6 M166.3,239.6c0-10.3-8.3-18.6-18.6-18.6h-38.8c-10.3,0-18.6,8.3-18.6,18.6 M253.4,239.6
        c0-10.3-8.3-18.6-18.6-18.6H196c-10.3,0-18.6,8.3-18.6,18.6 M128.9,24c10.9,0,19.7,8.8,19.7,19.7s-8.8,19.7-19.7,19.7
        c-10.9,0-19.7-8.8-19.7-19.7S118,24,128.9,24z M99.4,110.3V94.8h6.2v15.5h46.8V94.8h5.9v15.5h15.5V93.5c0-13.2-7.8-25.9-23-25.9
        h-44.2c-14,0-22.8,11.4-22.8,25.6v17.1H99.4z M65.4,114h125.9v20.9H65.4V114z"></path>
        </symbol>
      </svg>

      {
        variant !== 'none' ? (
          <>
            <svg className="icon icon--md icon-primary">
              <use xlinkHref={`#${variant}`}></use>
            </svg>
          </>) : (
          <div className="margin-top-sm">
            <div className="flex items-center flow-vertical">
            <div className="flex items-center justify-left">
              <svg className="icon icon--md icon-primary">
                <use xlinkHref="#mentality"></use>
              </svg>
            </div>
            <div>
              <svg className="icon icon--md icon-primary">
                <use xlinkHref="#speaking"></use>
              </svg>
            </div>
            <div>
              <svg className="icon icon--md icon-primary">
                <use xlinkHref="#business"></use>
              </svg>
            </div>
            </div>
          </div>
        )
      }
    </>
  );
}

export default Landing;
