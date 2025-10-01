def main():
    print("=== Калькулятор дневного дохода ===")

    # Доходы
    kass = float(input("Введите сумму через ККМ: "))
    nal = float(input("Введите сумму наличными: "))
    qr = float(input("Введите сумму через QR код: "))
    total_income = kass + nal + qr

    print(f"\nОбщий доход: {total_income} сом")

    # Расходы
    expenses = []
    while True:
        exp = input("Введите расход (или оставьте пустым для завершения): ")
        if exp == "":
            break
        try:
            expenses.append(float(exp))
        except ValueError:
            print("Ошибка: введите число.")

    total_expenses = sum(expenses)
    print(f"\nОбщие расходы: {total_expenses} сом")

    # Чистая прибыль
    net_income = total_income - total_expenses
    print(f"\nЧистый доход за день: {net_income} сом")

if __name__ == "__main__":
    main()
