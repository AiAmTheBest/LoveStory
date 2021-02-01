import dayjs from 'dayjs';
import 'dayjs/locale/ja';

dayjs.locale('ja');
export const changeLocale = (locale: string): void => {
    dayjs.locale(locale);
};
export const toLocalStringTime = (date: Date): string => {
    return dayjs(date).format('YYYY-MM-DD HH:mm:ss');
};

export const validateMail = (text: string) => {
    const reg = /^(\w+([\.\+-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+)$/;
    if (reg.test(text)) {
        return true;
    }
    return false;
};
