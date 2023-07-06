import { chats, messages } from "@/common/utils/mockData";
import Icon from "@/components/shared/Icon/Icon";
import Avatar from "@/components/shared/avatar/Avatar";
import Button from "@/components/shared/buttons/Button/Button";
import ChatListMessage from "@/components/shared/chat/ChatListMessage";
import Input from "@/components/shared/forms/Input/Input";
import classNames from "classnames";

export default function Home() {
  return (
    <div className="flex w-full min-h-screen items-stretch justify-between">
      <nav className="flex flex-col gap-4 w-16 py-24 border-r border-gray-500">
        <button className="border-x-2 border-r-transparent border-l-blue-500 text-blue-500">
          <Icon className="text-[1.75rem]" variant="user" />
        </button>
        <button>
          <Icon className="text-[1.75rem]" variant="bubble-speech" />
        </button>
        <button>
          <Icon className="text-[1.75rem]" variant="remove" />
        </button>
        <button>
          <Icon className="text-[1.75rem]" variant="power" />
        </button>
      </nav>
      <aside className="w-[25vw] p-4 border-r border-gray-500">
        <label className="relative block">
          <Input
            className="w-full pl-14 py-3 bg-slate-600 rounded-3xl"
            type="search"
            name="search"
            placeholder="Пошук"
          />
          <Icon
            className="absolute top-1/2 left-4 -translate-y-1/2 text-blue-500"
            variant="search"
          />
        </label>

        {chats.map(
          ({ id, name, imageUrl, isOnline, lastMessage, date }, index) => (
            <div
              key={id}
              className={classNames(
                "relative flex gap-4 items-center mb-4 p-4 rounded-3xl bg-slate-600",
                {
                  "bg-slate-800": index === 0,
                }
              )}
            >
              <Avatar
                className="flex-none"
                imageUrl={imageUrl}
                isOnline={isOnline}
              />
              <div className="overflow-hidden">
                <h3 className="text-lg font-medium">{name}</h3>
                <p className="text-sm text-gray-800 truncate">{lastMessage}</p>
              </div>
              <time className="absolute top-4 right-4 text-gray-800 text-xs">
                {date}
              </time>
            </div>
          )
        )}

        <Button className="p-3 bg-slate-600 text-sm text-gray-800">
          <Icon className="mr-1 text-blue-500 text-xl" variant="chat" />{" "}
          Створити новий чат
        </Button>
      </aside>

      <main className="relative flex flex-col justify-end flex-1 pt-28 pl-4 pr-8 pb-12">
        <header className="absolute left-0 top-0 h-28 flex gap-4 items-center w-full p-4 bg-slate-600">
          <Avatar imageUrl={chats[0].imageUrl} />
          <div>
            <h3 className="text-lg font-medium">{chats[0].name}</h3>
            <span className="text-sm text-gray-500">
              {chats[0].isOnline ? "Онлайн" : "Офлайн"}
            </span>
          </div>
        </header>

        <ChatListMessage activeUser="user2" messages={messages} />
      </main>
    </div>
  );
}
