type User = {
    name: string;
    sample: string;
    imageUrl: string;
    selected?: boolean;
};

export default function UserListItem({user}: { user: User }) {
    return (
        <li className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
                <img
                    className="h-12 w-12 flex-none rounded-full bg-gray-50"
                    src={user.imageUrl}
                    alt={user.name}
                />
                <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">{user.name}</p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">{user.sample}</p>
                </div>
            </div>

                <label className="flex items-center space-x-3 cursor-pointer p-2 px-4">
                    <div className="relative">
                        <input type="checkbox" className="sr-only peer"/>
                        <div
                            className="w-6 h-6 bg-white border-slate-700 border-[1px] rounded-md peer-checked:bg-green-400 transition-all duration-300"></div>
                        <svg
                            className="absolute w-4 h-4 text-white left-1 top-1 opacity-0 peer-checked:opacity-100 transition-opacity duration-300"
                            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clip-rule="evenodd"></path>
                        </svg>
                    </div>
                </label>
        </li>
    );
}
