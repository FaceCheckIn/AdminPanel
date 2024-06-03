import Image from "next/image"

interface Props {
  selectedUser: any
  setSelectedUser: any
}

const UsersList: React.FC<Props> = ({ selectedUser, setSelectedUser }) => {
  const users = [
    {
      id: 0,
      name: "مصطفی محمدی",
      role: "مدیر",
      isActive: true,
      image: "/fake1.jpeg",
    },
    {
      id: 1,
      name: " علی علیایی",
      role: "برنامه نویس",
      isActive: true,
      image: "/fake2.jpeg",
    },
    {
      id: 2,
      name: " سجاد فانی",
      role: "برنامه نویس",
      isActive: false,
      image: "/fake3.jpeg",
    },
    {
      id: 3,
      name: "مصطفی محمدی",
      role: "مدیر",
      isActive: true,
      image: "/fake1.jpeg",
    },
    {
      id: 4,
      name: " علی علیایی",
      role: "برنامه نویس",
      isActive: false,
      image: "/fake2.jpeg",
    },
    {
      id: 5,
      name: " سجاد فانی",
      role: "برنامه نویس",
      isActive: true,
      image: "/fake3.jpeg",
    },
  ]

  return (
    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 overflow-hidden">
      <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
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
            {users.map((user) => (
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
                        className="w-full h-full rounded-full"
                        src={user.image}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-900 whitespace-no-wrap ms-3">
                        {user.name}
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
                  {user.isActive ? (
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
