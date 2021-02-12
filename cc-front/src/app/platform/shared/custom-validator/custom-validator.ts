import { equalTo } from './equal-to/equal-to';
import { email } from './email/email';
import { number } from './number/number';
import { url } from './url/url';
import { telMobile } from './tel-mobile/tel-mobile';
import { idCard } from './id-card/id-card';
import { password } from './password/password';
import { tel } from './tel/tel';
import { mobile } from './mobile/mobile';
import { ch } from './ch/ch';
import { nonCh } from './non-ch/non-ch';

/**
 * 验证器
 */
export const customValidators: any = {
    'equalTo': equalTo, //判断是否相等
    'email': email, //邮箱
    'number': number, //数字
    'url': url, //url地址
    'telMobile': telMobile, //固话或手机
    'idCard': idCard, //身份证
    'password': password, //密码
    'tel': tel, //固话
    'mobile': mobile, //手机
    'ch': ch, //中文
    'nonCh': nonCh //非中文
};


