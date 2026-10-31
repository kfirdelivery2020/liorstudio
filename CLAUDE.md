# Lior Studio — אתר התדמית

אתר סטטי (HTML + CSS בלבד, בלי build ובלי dependencies) שמראה שLior Studio הוא עסק אמיתי.
מטרה עיקרית: אימות חשבון מפתח מקצועי (Organization) ב-Google Play.

**האתר הזה אינו קשור לפרויקט Piki.** התיקייה עצמאית ונועדה לעבור לריפוזיטורי ציבורי משלה
(`liorstudio`, אירוח ב-GitHub Pages). אסור לייבא ממנה או אליה קוד של Piki.

## פרטי העסק
- דומיין: `liorsstudio.com` (שים לב: שתי s ב-liorsstudio, שונה משם הריפוזיטורי `liorstudio`). מקושר ל-GitHub Pages (קובץ `CNAME`, HTTPS פעיל). ה-DNS ב-GoDaddy.
- אימייל ליצירת קשר: `contact@liorsstudio.com`. זו העברה (ImprovMX, תוכנית חינמית) לתיבת ה-Gmail של בעל העסק, לא תיבה נפרדת. ב-GoDaddy: MX ל-`mx1.improvmx.com` (10) ול-`mx2.improvmx.com` (20), ו-TXT של SPF `v=spf1 include:spf.improvmx.com ~all`. אל תחזיר MX של Google ואל תמחק אותם בלי תיבה חלופית. תשובות יוצאות מכתובת ה-Gmail (שליחה מהדומיין דורשת SMTP בתשלום). ב-Gmail יש מסנן "Never send to Spam" לכתובת. הכתובת חייבת להתאים גם ל-Play Console ולמדיניות הפרטיות של כל אפליקציה (ריפוזיטורים `courierinfo-privacy` ו-`courierfinance-privacy`, כבר עודכנו).
- טלפון: 050-321-2017
- ריפוזיטורי: `kfirdelivery2020/liorstudio`, ענף `main`, אירוח GitHub Pages.

## אפליקציות של Lior Studio
- **CourierInfo** — https://github.com/kfirdelivery2020/courierinfo-privacy (מדיניות פרטיות קיימת)
- **CourierFinance** — https://github.com/kfirdelivery2020/courierfinance-privacy (מדיניות פרטיות קיימת)
- **K Delivery**
- **Alertly** — קוראת התראות מהמכשיר (NotificationListenerService), חייבת סעיף מפורש בפרטיות
- **Piki** — בפיתוח, "בקרוב" בלבד

## מבנה
- כל דף קיים פעמיים: בעברית בשורש ובאנגלית ב-`en/` (אותו שם קובץ). שינוי בדף אחד דורש התאמה בשני.
- `index.html` — דף בית: כותרת וכרטיסי האפליקציות
- `about.html`, `contact.html` — אודות ויצירת קשר (פרטי בעל העסק ב-contact, לא בדף הבית)
- `courierinfo.html`, `courierfinance.html`, `alertly.html`, `kdelivery.html` — דף מוצר לכל אפליקציה
- `privacy.html`, `terms.html`, `*-privacy.html`, `courierfinance-delete-account.html` — מסמכים משפטיים
- `assets/style.css` — כל העיצוב, משתני צבע בראש הקובץ. בכל שינוי בו מעלים את `?v=` בקישור ב-HTML (מטמון)
- `assets/menu.js` — תפריט המבורגר, צל סרגל וכפתור שיתוף; `assets/theme.js` — מצב כהה; `assets/a11y.js` — תפריט נגישות עצמאי (בלי תוסף חיצוני)
- `assets/shots.js` — צילומי מסך מ-`assets/screens/` ותמונת בעל העסק מ-`assets/about/maker.*` (מופיעים רק אם יש קבצים; `?shots=demo` מציג מסגרות לבדיקה)
- `accessibility.html` — הצהרת נגישות. האתר לא מציב עוגיות (localStorage בלבד, מוסבר בדף הפרטיות), ולכן אין אנר עוגיות
- `piki.html` — דף תצוגה של Piki, מוסתר (`noindex`, לא מקושר) עד שיוחלט לקשר אליו
- לוגו: `assets/lockup-light.png` ו-`assets/lockup-dark.png` (לוגו מלא עם טקסט, PNG שקוף) בסרגל העליון של כל הדפים, מתחלפים לפי מצב בהיר/כהה ב-CSS. `assets/favicon.png`, `assets/apple-touch-icon.png` ו-`assets/og.png` נגזרים מאותו לוגו. לוגואים של Piki: `assets/logos/piki-*.png` (מאיקוני האפליקציות; Piki עדיין "בקרוב")
- `.nojekyll` — GitHub Pages מגיש כמו שהוא

## כללים
- אנגלית היא שפת האתר (גוגל בודקים באנגלית). אפשר להוסיף עברית בהמשך בדפים נפרדים.
- אין נתונים שאינם אמיתיים: כתובת, אימייל, שם רשום ו-D-U-N-S חייבים להתאים בדיוק
  למה שמוגש לגוגל. מקומות שממתינים למידע מסומנים `TODO:` בקבצים.
- אין קבצי מפתחות, אין טפסים שאוספים מידע, אין סקריפטים חיצוניים ואין אנליטיקס.
- דומיין וכתובת אימייל עסקית (לא Gmail) נדרשים לפני הגשה לגוגל: שניהם קיימים (ראה למעלה).
- הפורטל של CourierFinance (`courierinfo-a8750.web.app`) הוא פרויקט נפרד, `C:/Users/kfiry/courier-portal`, ומקושר מהתפריט. האתר הזה לא טוען ממנו כלום.

## אופן עבודה (העדפות בעל העסק)
- אחרי כל שינוי: commit, `git push origin main` בלי לבקש אישור, ובסוף ההודעה קישור חי (`https://liorsstudio.com/...`). בעל העסק צופה מהטלפון ולא יכול לפתוח קבצים מקומיים.
- לפני דחיפה של שינוי עיצובי: לבדוק עברית (RTL, שורש) ואנגלית (LTR, `en/`), בהיר וכהה, ברוחב כ-390px. להשתמש ב-`inset-inline-*` / `margin-inline-*`. תפריט ההמבורגר בצד ההתחלה (ימין בעברית, שמאל באנגלית), הלוגו במרכז, שפה ומצב כהה בצד הנגדי.
- לבדיקה: Edge headless (`C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe`) עם iframe ברוחב 390px. חלון צר מ-500px נחתך ולכן נראה שבור גם כשהוא תקין.
- בעל העסק מתחבר בעצמו לשירותים (GoDaddy, ImprovMX, Gmail, Play Console). לא מבקשים ולא מקלידים סיסמאות או מפתחות.

## סביבה (Windows)
- אין Python. לעיבוד תמונות: `System.Drawing` ב-PowerShell. הלוגואים השקופים נוצרו מ-JPG (לבן/שחור ל-alpha), כי `mix-blend-mode` יוצר ריבוע שחור בכותרת הכהה.
- ב-`sed` של GNU, `\U` בצד ההחלפה הופך לאותיות גדולות וקולקל נתיב Windows. להשתמש בנתיבים עם `/`.
- אזהרות LF→CRLF של git אינן תקלה.

## פתוח אצל בעל העסק
- ב-Play Console לעדכן את אימייל המפתח ואת איש הקשר של כל אפליקציה ל-`contact@liorsstudio.com`.
- מדיניות הפרטיות של CourierFinance (`courierfinance-privacy`): להוסיף סעיף על הפורטל, נדחה עד שהפורטל יעלה רשמית.
