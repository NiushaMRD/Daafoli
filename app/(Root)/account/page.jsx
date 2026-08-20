import { Suspense } from "react";
import AccountContainer from "@/components/AccountContainer";

function AccountPage() {
    return (
        <Suspense
            fallback={
                <section className="min-h-[60vh] bg-[#FAF7F8] px-5 py-16">
                    <div className="mx-auto max-w-5xl">
                        <div className="rounded-3xl bg-white p-10 text-center shadow-sm">
                            <div className="mx-auto h-10 w-10 animate-pulse rounded-full bg-[#F8EDF1]" />

                            <p className="mt-4 text-sm text-gray-500">
                                در حال بارگذاری حساب کاربری...
                            </p>
                        </div>
                    </div>
                </section>
            }
        >
            <AccountContainer />
        </Suspense>
    );
}

export default AccountPage;