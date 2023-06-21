import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

const Modal = ({ children, heading, show = false, setShow }) => {

	return (
		<Transition.Root show={show} as={Fragment}>
			<Dialog as="div" className="relative z-10" onClose={setShow}>
				<Transition.Child
				as={Fragment}
				enter="ease-out duration-300"
				enterFrom="opacity-0"
				enterTo="opacity-100"
				leave="ease-in duration-200"
				leaveFrom="opacity-100"
				leaveTo="opacity-0"
				>
				<div className="fixed inset-0 backdrop-blur-sm bg-white/40 bg-gray-900 bg-opacity-60 transition-opacity" />
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
					<Dialog.Panel className="relative transform overflow-hidden rounded-xl bg-white text-left my-auto shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
						<div className="flex items-center justify-between p-6 pb-4">
							<h3 className="font-bold text-xl md:text-2xl text-purple-700 uppercase">{heading}</h3>
							<button className='outline-none group' onClick={ () => setShow(false) }>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-gray-500 group-hover:text-purple-800 ease-in-out duration-300">
									<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
								</svg>
							</button>
						</div>
            			<hr />
						{children}
					</Dialog.Panel>
					</Transition.Child>
				</div>
				</div>
			</Dialog>
		</Transition.Root>
	)
}

export default Modal
