
import React from 'react';
import PracticeSection from './PracticeSection';

interface ContentProps {
  activeItemId: string;
}

const ContentCard: React.FC<{title: string; children: React.ReactNode}> = ({ title, children }) => (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 transition-all duration-300 ease-in-out animate-fade-in w-full">
        <h2 className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6 border-b-2 border-blue-200 dark:border-blue-800 pb-3 uppercase text-center">{title}</h2>
        <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
            {children}
        </div>
    </div>
);

const Icon: React.FC<{ path: string }> = ({ path }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
);

const productCategories = [
    {
        title: "HỌC LIỆU SỐ",
        products: [
            { name: "Thư viện số", icon: <Icon path="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /> },
            { name: "Phần mềm tạo học liệu", icon: <Icon path="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /> },
            { name: "Sách điện tử", icon: <Icon path="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" /> },
            { name: "Luyện thi", icon: <Icon path="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /> },
            { name: "Thi Tiếng Anh", icon: <Icon path="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C13.18 7.061 14.087 7.5 15 7.5c1.12 0 2.233-.038 3.334-.114M12 21v-8.586l-1.061-1.061a1 1 0 00-1.414 0l-3 3-1.06-1.06a1 1 0 00-1.415 0l-1.414 1.414a1 1 0 000 1.414l5.25 5.25a1 1 0 001.414 0z" /> },
        ]
    },
    {
        title: "QUẢN LÝ DẠY & HỌC TRỰC TUYẾN",
        products: [
            { name: "Kế hoạch giáo dục", icon: <Icon path="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18" /> },
            { name: "LMS (Quản lý khóa học)", icon: <Icon path="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0l-2.072-1.036A48.548 48.548 0 0112 3.493a48.548 48.548 0 0111.75 5.62l-2.072 1.036m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5z" /> },
            { name: "App Học cùng AI", icon: <Icon path="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.572L16.25 21.75l-.648-1.178a2.625 2.625 0 00-1.933-1.933L12.5 18l1.178-.648a2.625 2.625 0 001.933-1.933L16.25 14.25l.648 1.178a2.625 2.625 0 001.933 1.933L20 18.25l-1.178.648a2.625 2.625 0 00-1.933 1.933z" /> },
        ]
    },
    {
        title: "LIÊN HỆ NHÀ TRƯỜNG - PHỤ HUYNH",
        products: [
            { name: "App Học cùng AI (Dành cho phụ huynh)", icon: <Icon path="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.76 9.76 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" /> },
        ]
    },
    {
        title: "HỆ THỐNG SỔ SÁCH NHÀ TRƯỜNG",
        products: [
            { name: "Sổ đăng bộ học sinh", icon: <Icon path="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.53-2.475c0 .572.224 1.11.624 1.513l.311.31_1-1.061-1.06-1.061a1.125 1.125 0 010-1.59l2.25-2.25a1.125 1.125 0 011.59 0l1.06 1.061 1.06-1.061a1.125 1.125 0 011.59 0l2.25 2.25 1.5-1.5a.375.375 0 01.53 0l.813.813a.375.375 0 010 .53l-1.22 1.22a.375.375 0 01-.53 0l-.311-.31-1.5 1.5a.375.375 0 01-.53 0l-1.06-1.06-1.06 1.06a.375.375 0 01-.53 0l-2.25-2.25a.375.375 0 010-.53l1.06-1.06-1.59-1.59a3 3 0 00-4.242 0L6.172 7.72a3 3 0 000 4.242l4.242 4.242a3 3 0 004.243 0l.311-.311a3.375 3.375 0 014.243 4.242 3.375 3.375 0 01-4.243 0z" /> },
            { name: "Sổ đăng bộ cán bộ, giáo viên", icon: <Icon path="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.952a4.5 4.5 0 014.5 0m-4.5 0a4.5 4.5 0 00-4.5 0m3.75-9a4.5 4.5 0 014.5 0m-4.5 0a4.5 4.5 0 00-4.5 0m11.25 0c.398 0 .777.052 1.148.153M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" /> },
            { name: "Sổ ghi điểm", icon: <Icon path="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125v-15A1.125 1.125 0 013.375 2.25h17.25c.621 0 1.125.504 1.125 1.125v15c0 .621-.504 1.125-1.125 1.125m-17.25 0h.008v.015h-.008v-.015z" /> },
            { name: "Sổ theo dõi & đánh giá học sinh", icon: <Icon path="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /> },
            { name: "Học bạ số", icon: <Icon path="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.5c0-.621.504-1.125 1.125-1.125H7.5m9-6h3.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.5" /> },
            { name: "Sổ chủ nhiệm", icon: <Icon path="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /> },
            { name: "Sổ sức khỏe (mầm non)", icon: <Icon path="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /> },
            { name: "Sổ bé ngoan", icon: <Icon path="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.31h5.414a.563.563 0 01.32 1.024l-4.386 3.186a.563.563 0 00-.184.662l1.642 5.922a.563.563 0 01-.816.623l-4.83-3.003a.563.563 0 00-.642 0l-4.83 3.003a.563.563 0 01-.816-.623l1.642-5.922a.563.563 0 00-.184-.662l-4.386-3.186a.563.563 0 01.32-1.024h5.414a.563.563 0 00.475-.31l2.125-5.111z" /> },
        ]
    },
    {
        title: "CÁC NGHIỆP VỤ KHÁC HỖ TRỢ NHÀ TRƯỜNG",
        products: [
            { name: "Thời khóa biểu", icon: <Icon path="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /> },
            { name: "Website nhà trường", icon: <Icon path="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A11.953 11.953 0 0112 13.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12" /> },
        ]
    },
    {
        title: "GIẢI PHÁP CHO SỞ GIÁO DỤC",
        products: [
            { name: "Triển khai Sổ đăng bộ toàn ngành", icon: <Icon path="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" /> },
            { name: "Triển khai xây dựng kho học liệu số toàn ngành", icon: <Icon path="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" /> },
        ]
    }
];

const Content: React.FC<ContentProps> = ({ activeItemId }) => {
  const renderContent = () => {
    switch (activeItemId) {
      case 'solution':
        return (
          <div className="flex flex-col items-center gap-8">
            <ContentCard title="Hiểu vấn đề, nỗi đau của nhà trường">
                <div className="space-y-8 text-base">
                    {/* Section 1: Challenges */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 text-center">
                            Bối cảnh: Nỗi trăn trở của Hiệu trưởng
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-justify">
                            Với vai trò là người đứng đầu, Hiệu trưởng phải đưa ra quyết định lựa chọn nhà cung cấp phần mềm quản lý cho toàn trường. Đây là một quyết định quan trọng, ảnh hưởng trực tiếp đến hiệu quả vận hành và chất lượng dạy - học. Tuy nhiên, con đường này không hề dễ dàng với những thách thức:
                        </p>
                        <div className="mt-6 grid md:grid-cols-2 gap-6">
                            <div className="flex items-start p-4 bg-red-50 dark:bg-red-900/40 rounded-lg border border-red-200 dark:border-red-800/50">
                                <div className="flex-shrink-0 mr-4 pt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-red-800 dark:text-red-200">"Ma trận" nhà cung cấp</h4>
                                    <p className="text-sm text-red-700 dark:text-red-300 mt-1 text-justify">
                                        Có quá nhiều đơn vị trên thị trường, và ai cũng khẳng định sản phẩm của mình là tốt nhất.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start p-4 bg-yellow-50 dark:bg-yellow-900/40 rounded-lg border border-yellow-200 dark:border-yellow-800/50">
                                <div className="flex-shrink-0 mr-4 pt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2H5a2 2 0 00-2 2v2m14 0H5" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-yellow-800 dark:text-yellow-200">"Rừng" module chức năng</h4>
                                    <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1 text-justify">
                                        Hàng loạt các module từ quản lý học sinh, thời khóa biểu, đến tài chính, nhân sự... khiến Hiệu trưởng có thể bị rối, không biết bắt đầu từ đâu.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="border-gray-200 dark:border-gray-700" />

                    {/* Section 2: Goals/Criteria */}
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-8 text-center">
                            La bàn định hướng
                            <br />
                            Các tiêu chí cốt lõi để lựa chọn giải pháp nhằm đáp ứng nhu cầu của:
                        </h3>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                                <div className="flex items-center justify-center gap-4 mb-4">
                                    <h4 className="font-bold text-lg text-gray-800 dark:text-gray-100 leading-tight text-center">SỞ GIÁO DỤC</h4>
                                </div>
                                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                                    <li className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 dark:text-purple-400 flex-shrink-0 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                        <span>Đầy đủ chức năng theo quy định.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 dark:text-purple-400 flex-shrink-0 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                        <span>Quy trình nghiệp vụ chuẩn hóa.</span>
                                    </li>
                                </ul>
                            </div>

                             <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                                <div className="flex items-center justify-center gap-4 mb-4">
                                    <h4 className="font-bold text-lg text-gray-800 dark:text-gray-100 leading-tight text-center">GIÁO VIÊN, HỌC SINH</h4>
                                </div>
                                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                                    <li className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 dark:text-purple-400 flex-shrink-0 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                        <span>Đầy đủ tính năng, dễ sử dụng.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 dark:text-purple-400 flex-shrink-0 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                        <span>Ứng dụng AI tối ưu trải nghiệm.</span>
                                    </li>
                                     <li className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 dark:text-purple-400 flex-shrink-0 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                        <span>Tăng hiệu suất dạy và học.</span>
                                    </li>
                                </ul>
                            </div>

                             <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                                <div className="flex items-center justify-center gap-4 mb-4">
                                    <h4 className="font-bold text-lg text-gray-800 dark:text-gray-100 leading-tight text-center">PHÒNG IT</h4>
                                </div>
                                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                                    <li className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 dark:text-purple-400 flex-shrink-0 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                        <span>Hệ sinh thái sản phẩm đồng bộ.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 dark:text-purple-400 flex-shrink-0 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                        <span>Dữ liệu đồng nhất, dễ xử lý.</span>
                                    </li>
                                     <li className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 dark:text-purple-400 flex-shrink-0 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                        <span>Tối ưu trải nghiệm và hỗ trợ.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <hr className="border-gray-200 dark:border-gray-700" />
                    
                    <div>
                         <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 text-center">
                            Giá trị nhận được khi ra quyết định đúng
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-start p-4 bg-green-50 dark:bg-green-900/40 rounded-lg">
                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <div>
                                    <h4 className="font-semibold text-green-800 dark:text-green-200">Nhân viên hài lòng</h4>
                                    <p className="text-sm text-green-700 dark:text-green-300">Giáo viên, nhân viên cảm thấy được hỗ trợ, không bị ép buộc sử dụng một công cụ phức tạp, khó chịu.</p>
                                </div>
                            </div>
                             <div className="flex items-start p-4 bg-blue-50 dark:bg-blue-900/40 rounded-lg">
                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                                <div>
                                    <h4 className="font-semibold text-blue-800 dark:text-blue-200">Nâng cao hiệu quả</h4>
                                    <p className="text-sm text-blue-700 dark:text-blue-300">Công tác quản lý nhà trường, hoạt động dạy và học được tối ưu hóa, mang lại kết quả vượt trội.</p>
                                </div>
                            </div>
                             <div className="flex items-start p-4 bg-yellow-50 dark:bg-yellow-900/40 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" /></svg>
                                <div>
                                    <h4 className="font-semibold text-yellow-800 dark:text-yellow-200">Giá trị Kinh tế</h4>
                                    <p className="text-sm text-yellow-700 dark:text-yellow-300">Đầu tư hiệu quả mang lại lợi ích lâu dài về chi phí vận hành, thời gian và nguồn lực.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ContentCard>

            <div className="text-blue-500 dark:text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7 7m0 0l7-7m-7 7V3" />
                </svg>
            </div>

            <ContentCard title="Giải pháp cho nhà trường">
                <div className="space-y-12">
                    {/* Section 1: Core Values */}
                    <div>
                        <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center uppercase">Các giá trị của giải pháp</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="flex items-start p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-700/50">
                                <div className="flex-shrink-0 mr-4 pt-1 text-blue-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800 dark:text-gray-200">Hệ sinh thái Toàn diện & Thông minh</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 text-justify">Hệ sinh thái có đầy đủ sản phẩm, đáp ứng nhu cầu của nhà trường. Mỗi sản phẩm đều được nghiên cứu kỹ nhằm đúng quy trình nghiệp vụ do Bộ giáo dục, Sở giáo dục quy định. Hơn nữa, có ứng dụng AI để tối ưu quá trình dạy và học.</p>
                                </div>
                            </div>
                            <div className="flex items-start p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-700/50">
                                <div className="flex-shrink-0 mr-4 pt-1 text-blue-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800 dark:text-gray-200">Đội ngũ Chuyên nghiệp & Năng động</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 text-justify">Đội ngũ triển khai năng động, nhiều kinh nghiệm và nắm vững nghiệp vụ. Sẵn sàng thích ứng được với điều kiện cơ sở vật chất, hạ tầng công nghệ thông tin của mỗi trường.</p>
                                </div>
                            </div>
                            <div className="flex items-start p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-700/50">
                                <div className="flex-shrink-0 mr-4 pt-1 text-blue-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800 dark:text-gray-200">Chi phí Hợp lý & Minh bạch</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 text-justify">Giải pháp được đóng gói với mức chi phí hợp lý và tối ưu cho nhà trường. Tránh các trường hợp phát sinh hoặc gây mơ hồ cho nhà trường, học sinh.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="border-gray-200 dark:border-gray-600" />

                    {/* Section 2: Product Ecosystem */}
                    <div>
                        <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center uppercase">Các sản phẩm trong hệ sinh thái giáo dục số AISAVA</h3>
                        <div className="flex flex-col gap-8">
                           {productCategories.map((category) => (
                               <div key={category.title} className="p-6 bg-gray-50 dark:bg-gray-700/50 rounded-xl border border-gray-200 dark:border-gray-700/50 shadow-md">
                                   <h4 className="font-bold text-lg text-gray-800 dark:text-gray-200 text-center mb-6 uppercase tracking-wider">{category.title}</h4>
                                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                       {category.products.map((product) => (
                                           <div key={product.name} className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
                                                <div className="flex-shrink-0 text-blue-500 dark:text-blue-400 mt-1">
                                                    {product.icon}
                                                </div>
                                                <div className="flex-1">
                                                    <h5 className="font-semibold text-gray-900 dark:text-gray-100">{product.name}</h5>
                                                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 italic">Mô tả sẽ được cung cấp sau.</p>
                                                </div>
                                            </div>
                                       ))}
                                   </div>
                               </div>
                           ))}
                        </div>
                    </div>
                </div>
            </ContentCard>
          </div>
        );
      case 'pricing':
        return (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 transition-all duration-300 ease-in-out animate-fade-in w-full flex items-center justify-center min-h-[300px]">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 dark:text-gray-300 uppercase text-center">
                NỘI BỘ PHÒNG KINH DOANH
            </h2>
          </div>
        );
      case 'process':
        const processSteps = [
            { title: "Hướng dẫn đồng bộ dữ liệu từ CSDL ngành", description: "Kết nối và chuyển đổi dữ liệu học sinh, giáo viên từ cơ sở dữ liệu chung của ngành vào hệ thống, đảm bảo tính toàn vẹn và nhất quán." },
            { title: "Hướng dẫn đăng nhập & định danh tài khoản", description: "Cung cấp thông tin và hướng dẫn chi tiết cho từng người dùng về cách truy cập hệ thống lần đầu và xác thực danh tính." },
            { title: "Hướng dẫn phân quyền người dùng", description: "Thiết lập và gán quyền truy cập chức năng cho các nhóm người dùng (Ban giám hiệu, giáo viên,...) theo đúng vai trò và trách nhiệm." },
            { title: "Hướng dẫn quy trình nghiệp vụ của từng module", description: "Tổ chức các buổi đào tạo chuyên sâu, hướng dẫn người dùng thực hiện các tác vụ hàng ngày trên từng phân hệ của phần mềm." },
            { title: "Hỗ trợ và giải quyết vấn đề khó khăn của trường", description: "Đồng hành cùng nhà trường sau triển khai, tiếp nhận phản hồi và xử lý kịp thời các vướng mắc, sự cố phát sinh trong quá trình sử dụng." }
        ];

        return (
            <ContentCard title="Sơ đồ quy trình triển khai">
                <div className="space-y-16 flex flex-col items-center">
                    {/* Stage 1 */}
                    <div className="w-full">
                        <div className="flex items-center justify-center mb-8 p-4 bg-blue-50 dark:bg-gray-700/50 rounded-xl shadow-md border border-blue-100 dark:border-gray-700 w-full max-w-2xl mx-auto">
                            <span className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full font-bold text-2xl shadow-lg mr-6">1</span>
                            <h3 className="text-xl md:text-2xl font-bold text-blue-800 dark:text-blue-300 uppercase tracking-wide text-left">Tư vấn, báo giá, chốt hợp đồng</h3>
                        </div>
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-4 md:gap-2 w-full">
                            {/* Step 1.1 */}
                            <div className="flex flex-col items-center text-center p-4 max-w-xs mx-auto">
                                <div className="p-4 bg-blue-100 dark:bg-blue-900/50 rounded-full text-blue-600 dark:text-blue-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                                </div>
                                <h4 className="font-semibold mt-4">Khảo sát & Tư vấn</h4>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Hiểu rõ nhu cầu để tư vấn giải pháp phù hợp nhất.</p>
                            </div>

                            {/* Arrow */}
                            <div className="text-blue-400 dark:text-blue-500 self-center hidden md:block">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </div>
                             <div className="text-blue-400 dark:text-blue-500 self-center md:hidden mx-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16 17l-4 4m0 0l-4-4m4 4V3" /></svg>
                            </div>
                            

                            {/* Step 1.2 */}
                            <div className="flex flex-col items-center text-center p-4 max-w-xs mx-auto">
                                <div className="p-4 bg-blue-100 dark:bg-blue-900/50 rounded-full text-blue-600 dark:text-blue-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                </div>
                                <h4 className="font-semibold mt-4">Báo giá chi tiết</h4>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Cung cấp báo giá minh bạch, rõ ràng, chi tiết.</p>
                            </div>
                            
                            {/* Arrow */}
                            <div className="text-blue-400 dark:text-blue-500 self-center hidden md:block">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </div>
                            <div className="text-blue-400 dark:text-blue-500 self-center md:hidden mx-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16 17l-4 4m0 0l-4-4m4 4V3" /></svg>
                            </div>

                            {/* Step 1.3 */}
                            <div className="flex flex-col items-center text-center p-4 max-w-xs mx-auto">
                                <div className="p-4 bg-blue-100 dark:bg-blue-900/50 rounded-full text-blue-600 dark:text-blue-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                                </div>
                                <h4 className="font-semibold mt-4">Ký kết hợp đồng</h4>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Thống nhất các điều khoản và tiến hành ký kết.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="text-gray-400 dark:text-gray-500 self-center mx-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </div>

                    {/* Stage 2 */}
                    <div className="w-full">
                        <div className="flex items-center justify-center mb-12 p-4 bg-green-50 dark:bg-gray-700/50 rounded-xl shadow-md border border-green-100 dark:border-gray-700 w-full max-w-2xl mx-auto">
                            <span className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full font-bold text-2xl shadow-lg mr-6">2</span>
                            <h3 className="text-xl md:text-2xl font-bold text-green-800 dark:text-green-300 uppercase tracking-wide text-left">Tập huấn & Triển khai</h3>
                        </div>
                        <div className="relative">
                            <div className="absolute left-6 top-0 h-full w-0.5 bg-green-200 dark:bg-green-700" aria-hidden="true" />
                            <ol className="space-y-12">
                                {processSteps.map((step, index) => (
                                    <li key={index} className="relative">
                                        <div className="flex items-start">
                                            <div className="flex-shrink-0">
                                                <div className="absolute left-0 flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-800 text-green-600 dark:text-green-300 rounded-full font-bold text-xl border-2 border-green-200 dark:border-green-700">
                                                    {index + 1}
                                                </div>
                                            </div>
                                            <div className="ml-20 w-full">
                                                <h4 className="font-bold text-lg text-gray-800 dark:text-gray-200">{step.title}</h4>
                                                <p className="text-gray-500 dark:text-gray-400 mt-1">{step.description}</p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>
            </ContentCard>
        );
      case 'practice':
        return (
            <PracticeSection />
        );
      default:
        return <div>Chọn một mục để xem nội dung.</div>;
    }
  };

  return <div className="max-w-4xl mx-auto w-full">{renderContent()}</div>;
};

export default Content;
