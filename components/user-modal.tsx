import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react"
import { Input } from "@nextui-org/react"

export default function UsersModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <>
      <Button onPress={onOpen}>افزودن+</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                افزودن فرد
              </ModalHeader>
              <ModalBody>
                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center size-12 rounded-full  border-2 border-gray-300 border-dashed cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div className="flex flex-col items-center justify-center">
                      <svg
                        className="w-6 h-6 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" />
                  </label>
                </div>
                <h5 className="text-center text-sm">آپلود تصویر</h5>

                <Input type="text" label="کدملی" />
                <Input type="text" label="نام" />
                <Input type="text" label="نام خانوادگی" />
                <Input type="text" label="نقش" />
                <Input type="text" label="کلمه عبور" />
                <Input type="text" label="تایید کلمه عبور" />
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose} className="w-full">
                  افزودن
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
