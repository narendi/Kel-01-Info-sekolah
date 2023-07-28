/* eslint-disable jsx-a11y/anchor-is-valid */
/* This example requires Tailwind CSS v2.0+ */
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { BellIcon } from "@heroicons/react/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Notif() {
  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="text-black focus:text-black focus:ring-2 focus:ring-offset-1 focus:outline-none focus:ring-offset-white p-1 rounded-full ">
            <span className="sr-only">Profile Picture</span>
            <BellIcon className="h-6 w-6" aria-hidden="true" />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <div
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    <h1>Notif Bro</h1>
                  </div>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
}
