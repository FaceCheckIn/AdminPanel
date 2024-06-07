import { digitsEnToFa } from "@persian-tools/persian-tools"
import Image from "next/image"
import UsersModal from "./user-modal"
import { useEffect, useState } from "react"
import HttpService from "@/http-service/axios"

interface Props {
  selectedUser: any
  setSelectedUser: any
}

const UsersList: React.FC<Props> = ({
  selectedUser,
  setSelectedUser,
  users,
  modalSubmit,
}) => {
  console.log({ users })

  return (
    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8">
      <div className="inline-block min-w-full shadow rounded-lg ">
        <div className="flex justify-between mb-2 items-center w-full">
          <h2>افراد</h2>
          <UsersModal onSubmit={modalSubmit} />
        </div>
        <table className="min-w-full leading-normal text-right" dir="rtl">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100  text-xs font-semibold text-gray-600 uppercase tracking-wider">
                نام
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100  text-xs font-semibold text-gray-600 uppercase tracking-wider">
                شغل
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100  text-xs font-semibold text-gray-600 uppercase tracking-wider">
                وضعیت
              </th>
            </tr>
          </thead>
          <tbody className="max-h-[200px] overflow-hidden">
            {users.map((user: any) => (
              <tr
                key={user.id}
                onClick={() => setSelectedUser(user)}
                style={{
                  background: selectedUser?.id == user.id ? "#b5ddf5" : "white",
                }}
                className="cursor-pointer"
              >
                <td className="px-5 py-5 border-b border-gray-200 text-sm">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-10 h-10">
                      <Image
                        width={44}
                        height={44}
                        className="w-full h-full rounded-full object-contain"
                        src={user.image1}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-900 whitespace-no-wrap ms-3 line-clamp-1">
                        {user.first_name} {user.last_name}
                      </p>
                      <p className="text-gray-400 whitespace-nowrap ms-3 mt-1">
                        {digitsEnToFa(user.identification_code)}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {user.role}
                  </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 ">
                  {user.status === "enter" ? (
                    <div className="pulse  bg-green-700 rounded-full size-4"></div>
                  ) : (
                    <div className="pulse bg-red-500 rounded-full size-4"></div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UsersList
