export const useDateNow = () => {
    return new Date().toLocaleDateString("ru-ru", {year: "numeric", month: "numeric", day: "numeric"}) + ' ' + new Date().toLocaleTimeString("ru-ru", {hour: "2-digit", minute: "2-digit", second: "2-digit"})
}
