import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function ProfileCard(props) {

  return (
    <Transition.Root show={props.open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={props.setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative w-[960px] h-[576px] transform overflow-hidden rounded-lg bg-bg-color text-left shadow-xl transition-all ">
                <div className="grid grid-cols-2">
                  <img src={props.imageUrl} className="object-cover bg-no-repeat w-[360px] h-[480px] m-[48px]" alt={props.id}/>
                  <div className="mt-[48px]">
                    <h1 className="shinjuku-primary-black text-[40px] medium-redaction">Student identification</h1>

                    <div className="flex rounded-full border-2 border-black bg-pink h-[32px] w-[120px] items-center justify-center mt-[8px]">
                      <span className="text-[16px] text-primary-black">#{props.studentID}</span>
                    </div>

                    <div className="mt-[32px] grid grid-cols-2 gap-x-[72px] gap-y-[24px]">
                      <div className="gap-y-[4px]">
                        <h1 className="text-[12px]">BACKGROUND</h1>
                        <h1 className="font-bold text-[16px]">{props.cardBackground}</h1>
                      </div>
                      <div className="gap-y-[4px]">
                        <h1 className="text-[12px]">EYEWEAR</h1>
                        <h1 className="font-bold text-[16px]">{props.cardEyewear}</h1>
                      </div>
                      <div className="gap-y-[4px]">
                        <h1 className="text-[12px]">BODY POSE</h1>
                        <h1 className="font-bold text-[16px]">{props.cardBodyPose}</h1>
                      </div>
                      <div className="gap-y-[4px]">
                        <h1 className="text-[12px]">FACE EXPRESSION</h1>
                        <h1 className="font-bold text-[16px]">{props.cardFaceExpression}</h1>
                      </div>
                      <div className="gap-y-[4px]">
                        <h1 className="text-[12px]">CLIQUE</h1>
                        <h1 className="font-bold text-[16px]">{props.cardClique}</h1>
                      </div>
                      <div className="gap-y-[4px]">
                        <h1 className="text-[12px]">HAIR</h1>
                        <h1 className="font-bold text-[16px]">{props.cardHair}</h1>
                      </div>
                      <div className="gap-y-[4px]">
                        <h1 className="text-[12px]">CLOTHING</h1>
                        <h1 className="font-bold text-[16px]">{props.cardClothing}</h1>
                      </div>
                      <div className="gap-y-[4px]">
                        <h1 className="text-[12px]">HEADGEAR</h1>
                        <h1 className="font-bold text-[16px]">{props.cardHeadgear}</h1>
                      </div>
                      <div className="gap-y-[4px]">
                        <h1 className="text-[12px]">EYES</h1>
                        <h1 className="font-bold text-[16px]">{props.cardEyes}</h1>
                      </div>
                      <div className="gap-y-[4px]">
                        <h1 className="text-[12px]">WEARABLES</h1>
                        <h1 className="font-bold text-[16px]">{props.cardWearables}</h1>
                      </div>
                    </div>

                    <div className="mt-[40px] flex flex-row gap-x-[20px]">
                      <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 4.81473L4.75676 0.0546875H11.2432L16 4.81473L8 12.8114L0 4.81473ZM11.6757 3.08169C9.65456 1.0517 6.34544 1.05171 4.32432 3.0817L2.59459 4.81146L4.32432 6.5412C6.34544 8.57119 9.65456 8.57117 11.6757 6.54118L13.4054 4.81146L11.6757 3.08169Z" fill="#050810"/>
                      </svg>
                      <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.25 0C2.79875 0 0 2.79875 0 6.25C0 9.70125 2.79875 12.5 6.25 12.5C9.70125 12.5 12.5 9.70125 12.5 6.25C12.5 2.79875 9.7025 0 6.25 0ZM3.08375 6.46L3.11 6.4175L4.73625 3.87375C4.76 3.8375 4.81625 3.84125 4.83375 3.88125C5.105 4.49 5.34 5.2475 5.23 5.71875C5.18375 5.9125 5.055 6.175 4.91 6.4175C4.89125 6.4525 4.87125 6.4875 4.84875 6.52125C4.83875 6.53625 4.82125 6.545 4.8025 6.545H3.13125C3.08625 6.545 3.06 6.49625 3.08375 6.46ZM10.33 7.335C10.33 7.35875 10.3163 7.37875 10.2963 7.3875C10.17 7.44125 9.73875 7.64 9.56 7.88875C9.1025 8.525 8.75375 9.435 7.9725 9.435H4.715C3.56 9.435 2.625 8.49625 2.625 7.3375V7.3C2.625 7.27 2.65 7.245 2.68125 7.245H4.49625C4.5325 7.245 4.55875 7.2775 4.55625 7.31375C4.5425 7.43125 4.565 7.5525 4.62125 7.6625C4.72875 7.88125 4.9525 8.0175 5.19375 8.0175H6.0925V7.31625H5.20375C5.15875 7.31625 5.13125 7.26375 5.1575 7.22625C5.1675 7.21125 5.1775 7.19625 5.19 7.17875C5.27375 7.05875 5.39375 6.87375 5.51375 6.6625C5.595 6.52 5.67375 6.3675 5.7375 6.215C5.75 6.1875 5.76 6.15875 5.77125 6.13125C5.78875 6.0825 5.80625 6.03625 5.81875 5.99125C5.83125 5.9525 5.8425 5.9125 5.8525 5.875C5.8825 5.745 5.895 5.6075 5.895 5.465C5.895 5.40875 5.8925 5.35 5.8875 5.295C5.885 5.23375 5.8775 5.1725 5.87 5.11125C5.865 5.0575 5.855 5.00375 5.845 4.94875C5.83125 4.8675 5.81375 4.78625 5.79375 4.705L5.78625 4.67375C5.77125 4.6175 5.7575 4.565 5.74 4.50875C5.68875 4.33375 5.63125 4.1625 5.56875 4.0025C5.54625 3.93875 5.52125 3.8775 5.495 3.8175C5.4575 3.725 5.41875 3.64125 5.38375 3.5625C5.365 3.52625 5.35 3.49375 5.335 3.46C5.3175 3.4225 5.3 3.385 5.28125 3.34875C5.26875 3.32125 5.25375 3.295 5.24375 3.27L5.13375 3.0675C5.11875 3.04 5.14375 3.00625 5.17375 3.015L5.86125 3.20125H5.86375H5.86625L5.95625 3.2275L6.05625 3.255L6.0925 3.265V2.8575C6.0925 2.66 6.25 2.5 6.44625 2.5C6.54375 2.5 6.6325 2.54 6.695 2.605C6.75875 2.67 6.79875 2.75875 6.79875 2.8575V3.46375L6.8725 3.48375C6.8775 3.48625 6.88375 3.48875 6.88875 3.4925C6.90625 3.505 6.9325 3.525 6.965 3.55C6.99125 3.57 7.01875 3.595 7.05125 3.62125C7.1175 3.675 7.1975 3.74375 7.28375 3.8225C7.30625 3.8425 7.32875 3.8625 7.35 3.88375C7.46125 3.9875 7.58625 4.10875 7.70625 4.24375C7.74 4.2825 7.7725 4.32 7.80625 4.36125C7.83875 4.4025 7.875 4.4425 7.905 4.4825C7.94625 4.53625 7.98875 4.5925 8.0275 4.65125C8.045 4.67875 8.06625 4.7075 8.0825 4.735C8.1325 4.80875 8.175 4.885 8.21625 4.96125C8.23375 4.99625 8.25125 5.035 8.26625 5.0725C8.3125 5.175 8.34875 5.27875 8.37125 5.38375C8.37875 5.40625 8.38375 5.43 8.38625 5.4525V5.4575C8.39375 5.4875 8.39625 5.52 8.39875 5.55375C8.40875 5.66 8.40375 5.7675 8.38125 5.875C8.37125 5.92 8.35875 5.9625 8.34375 6.00875C8.3275 6.0525 8.3125 6.0975 8.2925 6.14125C8.25375 6.23 8.20875 6.32 8.155 6.4025C8.1375 6.43375 8.11625 6.46625 8.09625 6.4975C8.07375 6.53 8.05 6.56125 8.03 6.59125C8.00125 6.63 7.97125 6.67 7.94 6.70625C7.9125 6.74375 7.885 6.78125 7.85375 6.815C7.81125 6.86625 7.77 6.91375 7.72625 6.96C7.70125 6.99 7.67375 7.02125 7.645 7.04875C7.6175 7.08 7.58875 7.1075 7.56375 7.1325C7.52 7.17625 7.485 7.20875 7.455 7.2375L7.38375 7.30125C7.37375 7.31125 7.36 7.31625 7.34625 7.31625H6.79875V8.0175H7.4875C7.64125 8.0175 7.7875 7.96375 7.90625 7.8625C7.94625 7.8275 8.1225 7.675 8.33125 7.445C8.33875 7.43625 8.3475 7.43125 8.3575 7.42875L10.2587 6.87875C10.295 6.86875 10.33 6.895 10.33 6.9325V7.335Z" fill="#050810"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}