export default function Home() {
    return (<main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
            <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                Welcome to
                <span className="ml-2 text-2xl font-bold text-gray-900 dark:text-gray-100 lg:text-3xl">
                    The IBL
                </span>
                <div className="hidden ml-2 text-xs text-gray-500 dark:text-gray-400 lg:block">
                    Coming soon!
                </div>
            </p>
        </div>
    </main>);
}
