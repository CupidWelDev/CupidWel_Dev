import Link from "next/link";
import { useRouter } from "next/router";
import GoBackButton from "./GoBackButton";

interface HeaderProps {
	title?: string;
}

export default function Header({ title }: HeaderProps) {
  const router = useRouter();
  const onClick = () => {
    router.back();
  };

  // GoBack component 없는 페이지들
  const cannotGoBack = ["/"];
  // 알림(종) 보이는 페이지
  const showNotification = ["/", "/Scrap", "/UserInfo"];

  return (
    <div className="w-screen flex justify-between p-4">
      <div className="flex gap-1 justify-center items-center">
        {cannotGoBack.includes(router.pathname) ? null : (
          <GoBackButton onClick={onClick}/>
        )}

        <p className="text-2xl font-bold"> 
          {title}
        </p>

        {(router.pathname === "/") ? (
          <Link href="/">
            <a>
              <div className="flex flex-row items-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                  >
                    <g
                      id="그룹_57628"
                      data-name="그룹 57628"
                      transform="translate(-18 -56)"
                    >
                      <g
                        id="그룹_57626"
                        data-name="그룹 57626"
                        transform="translate(-855.102 -386.648)"
                      >
                        <g
                          id="그룹_57627"
                          data-name="그룹 57627"
                          transform="translate(878.465 446.663)"
                        >
                          <g
                            id="그룹_57626-2"
                            data-name="그룹 57626"
                            transform="translate(0 0)"
                          >
                            <path
                              id="패스_23518"
                              data-name="패스 23518"
                              d="M890.1,456.8a.854.854,0,0,1-.311-.059l-10.781-4.21a.856.856,0,0,1,0-1.6l10.781-4.21a.856.856,0,0,1,.623,0l10.781,4.21a.856.856,0,0,1,0,1.6l-10.781,4.21A.854.854,0,0,1,890.1,456.8Zm-8.427-5.067,8.427,3.291,8.427-3.291-8.427-3.291Z"
                              transform="translate(-878.465 -446.663)"
                              fill="#fc5230"
                              stroke="#fc5230"
                              stroke-width="0.7"
                            />
                          </g>
                        </g>
                        <path
                          id="패스_23519"
                          data-name="패스 23519"
                          d="M896.323,521.6a5.978,5.978,0,0,0-4.264,1.784l-1.511,1.511-1.511-1.511a5.979,5.979,0,0,0-4.263-1.784,5.846,5.846,0,0,0-4.077,9.98l5.716,5.716a.856.856,0,0,0,1.211,0h0a.856.856,0,0,0,0-1.211l-5.716-5.716a4.131,4.131,0,0,1-1.143-3.686,3.975,3.975,0,0,1,.654-1.576,4.138,4.138,0,0,1,6.335-.584l5.756,5.756a.856.856,0,0,0,1.211,0h0a.856.856,0,0,0,0-1.211l-2.963-2.963,1.522-1.522a4.244,4.244,0,0,1,2.816-1.267,4.132,4.132,0,0,1,3.585,1.8,3.972,3.972,0,0,1,.648,1.569,4.131,4.131,0,0,1-1.143,3.684l-5.111,5.111-8.964-8.964a.856.856,0,0,0-1.211,0h0a.856.856,0,0,0,0,1.211l9.565,9.565a.863.863,0,0,0,1.221,0l5.711-5.711a5.846,5.846,0,0,0-4.076-9.98Z"
                          transform="translate(-0.447 -64.242)"
                          fill="#fc5230"
                          stroke="#fc5230"
                          stroke-width="0.7"
                        />
                      </g>
                      <rect
                        id="사각형_21289"
                        data-name="사각형 21289"
                        width="34"
                        height="34"
                        transform="translate(18 56)"
                        fill="none"
                      />
                    </g>
                  </svg>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="92"
                    height="26"
                    viewBox="0 0 92 26"
                  >
                    <text
                      id="CupidWel"
                      transform="translate(1 20)"
                      stroke="rgba(0,0,0,0)"
                      stroke-miterlimit="10"
                      stroke-width="1"
                      font-size="20"
                      font-family="Pretendard-SemiBold, Pretendard"
                      font-weight="600"
                    >
                      <tspan x="0" y="0">
                        CupidWel
                      </tspan>
                    </text>
                  </svg>
                </div>
              </div>
            </a>
          </Link>
        ) : null}
      </div>
      


      <div className="flex gap-4 justify-center items-center ">
        {(router.pathname === "/") ? (
          <div>
            <Link href="/SearchScholarship">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
              >
                <g
                  id="그룹_55580"
                  data-name="그룹 55580"
                  transform="translate(-254.764 -59.764)"
                >
                  <g
                    id="그룹_3847"
                    data-name="그룹 3847"
                    transform="translate(261.114 66.038)"
                  >
                    <circle
                      id="타원_36"
                      data-name="타원 36"
                      cx="7.415"
                      cy="7.415"
                      r="7.415"
                      fill="none"
                      stroke="#000"
                      stroke-miterlimit="10"
                      stroke-width="1.5"
                    />
                    <line
                      id="선_29"
                      data-name="선 29"
                      x2="4.398"
                      y2="4.462"
                      transform="translate(12.901 12.99)"
                      fill="none"
                      stroke="#000"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      stroke-width="1.5"
                    />
                  </g>
                  <rect
                    id="사각형_2732-2"
                    data-name="사각형 2732-2"
                    width="30"
                    height="30"
                    transform="translate(254.764 59.764)"
                    fill="none"
                  />
                </g>
              </svg>
            </Link>
          </div>
        ) : null}
        {showNotification.includes(router.pathname) ? (
          <div>
            <Link href="/UserInfo/Notification">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
              >
                <defs>
                  <clipPath id="clip-path">
                    <rect
                      id="사각형_20830"
                      data-name="사각형 20830"
                      width="30"
                      height="30"
                      fill="none"
                    />
                  </clipPath>
                </defs>
                <g
                  id="그룹_55319"
                  data-name="그룹 55319"
                  clip-path="url(#clip-path)"
                >
                  <g
                    id="그룹_55318"
                    data-name="그룹 55318"
                    transform="translate(0.565 0.714)"
                  >
                    <path
                      id="패스_23494"
                      data-name="패스 23494"
                      d="M14.44,6.793h0a6.668,6.668,0,0,1,6.666,6.666v3.16a9.429,9.429,0,0,0,1.276,4.37H6.5a9.429,9.429,0,0,0,1.276-4.37v-3.16A6.668,6.668,0,0,1,14.44,6.793"
                      transform="translate(0 -0.167)"
                      fill="none"
                      stroke="#000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    />
                    <path
                      id="패스_23495"
                      data-name="패스 23495"
                      d="M11.392,22.106a3.369,3.369,0,1,0,6.737.112q0-.056,0-.112"
                      transform="translate(-0.325 -1.184)"
                      fill="none"
                      stroke="#000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    />
                    <line
                      id="선_1"
                      data-name="선 1"
                      y1="2.203"
                      transform="translate(14.433 4.286)"
                      fill="none"
                      stroke="#000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    />
                  </g>
                </g>
              </svg>
            </Link>
          </div>
        ) : null}

      </div>
    </div>
  );
}
