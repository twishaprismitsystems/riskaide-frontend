
const InsuranceCard = () => {
    return (
        <>
            <div className="border border-red-500 text-right insuranceCard flex justify-start flex-col">
                <div className="parent flex justify-start items-center">
                    <img src="/assets/tree.png" alt="logo.png" className="insuranceSubCard rounded-50" />
                    <h4 className="shrink-0 mb-0 ml-11 text-h4 text-primary font-bold uppercase">Term Insurance</h4>
                </div>
                <div className="flex justify-end items-center cursor-pointer">
                    <h4 className="mb-0 text-h4 font-bold text-secondary">Know More
                    </h4>
                    <svg className="ml-4" xmlns="http://www.w3.org/2000/svg" width="25" height="22" viewBox="0 0 25 22" fill="none">
                        <path d="M12.5 11.7381L4.45138 20.7469C3.88196 21.3347 3.00258 21.3347 2.43922 20.7469L0.427066 18.7449C-0.142355 18.157 -0.142355 17.3246 0.427066 16.7429L6.46353 10.7371L0.427066 4.73121C-0.142355 4.14332 -0.142355 3.31089 0.427066 2.72925L2.43922 0.727295C3.00864 0.139404 3.88801 0.139404 4.45138 0.727295L12.5 9.7361C13.0755 10.324 13.0694 11.1502 12.5 11.7381ZM24.5729 9.7361L15.5182 0.727295C14.9488 0.139404 14.0694 0.139404 13.5061 0.727295L12.5 2.72925C11.9306 3.31714 11.9306 4.14957 12.5 4.73121L18.5365 10.7371L12.5 16.7429C11.9306 17.3308 11.9306 18.1633 12.5 18.7449L13.5061 20.7469C14.0755 21.3347 14.9549 21.3347 15.5182 20.7469L24.5729 11.7381C25.1424 11.1627 25.1424 10.324 24.5729 9.7361Z" fill="#009936" />
                    </svg>
                </div>
            </div>
        </>
    )
}

export default InsuranceCard
