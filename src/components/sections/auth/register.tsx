import { Input } from "@/components/ui/input";
import Button from "@/components/common/button";
import { FacebookIcon, GoogleIcon } from "@/components/icons";

export default function Register({
  setRegister,
}: {
  setRegister: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div
      className="register-page absolute left-0 top-0 z-20 size-full bg-[#226960] bg-opacity-20"
      onClick={(event) => {
        setRegister(!event);
      }}
    >
      <div className="form-register flex size-full items-center justify-center">
        <form
          className="w-[416px] rounded-[6px] bg-white p-6"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="title-form text-center text-[20px] font-bold uppercase">
            đăng ký
          </div>
          <div className="form-submit grid gap-2 text-[12px]">
            <div className="email">
              <label htmlFor="email">Email</label>
              <Input
                type="email"
                placeholder="Vui lòng nhập email"
                className="mt-2 text-[12px]"
              />
            </div>

            <div className="password">
              <label htmlFor="password">Password</label>
              <Input
                type="password"
                placeholder="Vui lòng nhập password"
                className="mt-2 text-[12px]"
              />
            </div>

            <div className="password-comfirm">
              <label htmlFor="password-comfirm">Password comfirm</label>
              <Input
                type="password-comfirm"
                placeholder="Vui lòng nhập password"
                className="mt-2 text-[12px]"
              />
            </div>

            <div className="select-socical mt-2 flex justify-between">
              <div className="btn-socical">
                <Button
                  invert
                  className="rounded-[8px] border border-b-4 border-[#DE543D] px-2 py-1"
                >
                  <GoogleIcon />
                </Button>

                <Button
                  invert
                  className="ml-3 rounded-[8px] border border-b-4 border-[#226960] px-2 py-1"
                >
                  <FacebookIcon />
                </Button>
              </div>
              <div className="btn-submit">
                <Button
                  type="submit"
                  invert
                  className="rounded-[8px] border border-b-4 border-[#226960] px-2 py-1"
                >
                  <div className="text-sm font-bold leading-6 text-[#226960]">
                    Đăng ký
                  </div>
                </Button>
              </div>
            </div>

            <div className="bottom-title mt-2 flex items-center justify-center text-[14px]">
              Bạn đã có tài khoản&nbsp;
              <div className="underline decoration-1">Đăng nhập</div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
