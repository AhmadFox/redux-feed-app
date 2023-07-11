import React, { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';

const alertType = [
	{color: 'bg-red-100'},
	{color: 'bg-green-200'},
	{color: 'bg-blue-100'},
	{color: 'bg-gray-200'},
];

const Dropdown = (props) => {

	return (
		<Popover className={`relative ${props.addStyle}`}>
			<Popover.Button className="outline-none items-center gap-x-1 inline-flex relative">
				{props.children}
			</Popover.Button>

			<Transition
				as={Fragment}
				enter="transition ease-out duration-200"
				enterFrom="opacity-0 translate-y-1"
				enterTo="opacity-100 translate-y-0"
				leave="transition ease-in duration-150"
				leaveFrom="opacity-100 translate-y-0"
				leaveTo="opacity-0 translate-y-1"
			>
				<Popover.Panel className="absolute -right-12 z-10 mt-10 flex px-4 min-w-[330px]">
				<div className="flex-auto overflow-hidden rounded-xl bg-white text-sm leading-6 shadow-lg">
				<div className="p-4">
				<p className="text-gray-600 font-bold text-lg capitalize mb-3">Notifications</p>
				<div className="grid gap-y-3">
				
					<div className={`px-3 py-2 rounded-md ${alertType[0].color}`}>
						<p className="text-gray-700 font-medium capitalize flex justify-between">failed in posting <small className='text-gray-500 italic'>14 Min ago</small></p>
						<small className='text-gray-700'>Your post ID:9923 is failed to puplish, please try again!</small>
					</div>

					<div className={`px-3 py-2 rounded-md ${alertType[1].color}`}>
						<p className="text-gray-700 font-medium capitalize flex justify-between">Success Puplishing <small className='text-gray-500 italic'>22 Min ago</small></p>
						<small className='text-gray-700'>Your post ID:9923 is puplished now!</small>
					</div>

					<div className={`px-3 py-2 rounded-md ${alertType[3].color}`}>
						<p className="text-gray-700 font-medium capitalize flex justify-between">New Login <small className='text-gray-500 italic'>22 Min ago</small></p>
						<small className='text-gray-700'>welecom Back, you log in again!</small>
					</div>

					<div className={`px-3 py-2 rounded-md ${alertType[2].color}`}>
						<p className="text-gray-700 font-medium capitalize flex justify-between">New Reactions <small className='text-gray-500 italic'>1H ago</small></p>
						<small className='text-gray-700'>John Doe has like your post</small>
					</div>
				</div>
            </div>
				</div>
				</Popover.Panel>
      	</Transition>
    </Popover>
  )
}

export default Dropdown;
