"""
Sebastian Perdomo
Monday, June 24, 2024
"""

print("Welcome to Python")

#Declaring variables

num1 = 12
num2 = -9
sum1 = num1 + num2
fullname = "Peter Pan"
checkmood = True

# print variables and string in one print

print(f"Welcome to Python {fullname}. The sum {num1} amd {num2} is {sum1}")

# Collect data from the keyword

print("-----Example 1: Calculating Hypotenuse-----")

h = float(input("Enter a height: "))

w = float(input("Enter a width: "))

# Calculate the hypotenuse

hyp = (h**2 + w**2)**0.5
hyp = round(hyp,2) #or in f string

print(f"The collected height is {h} and width is {w}. The calculated hypotenuse is {round(hyp,2)}")

print("----- Example 2: String -----")
msg = "Hello World"
lengthmsg = len(msg)
check1 = "m" in msg
check2 = "o" in msg


print(f"The message has {lengthmsg} characters.")
print(f"The character in index is {msg[6]}")

print(f"Is the letter 'm' in msg? {check1}")
print(f"Is the letter 'o' in msg? {check2}")

print("\n----- Example 3: Control Flow")

# check if someones's age is greater than or equal to 21

age = 23
if age >= 21:
    print("You're an adult")
else:
    print("You're underage!")

print("\n----- Example 4: Control Flow (GPA) -----")
grade1 = float(input("Enter grade 1: "))
grade2 = float(input("Enter grade 2: "))

average = (grade1 + grade2)/2

if average >= 90 and average <= 100:
    gpa = "A"
elif average >= 80 and average <= 89.99:
    gpa = "B"
elif average >= 70 and average <= 79.99:
    gpa = "C"
elif average >= 60 and average <= 69.99:
    gpa = "D"
elif average > 100:
    gpa = "Undefined"
else:
    gpa = "F"

print(f"The average grade is {average} with a gpa of {gpa}")

print("\n----- Example 5: For Loop -----")
#print from 0 to 5, exclusive (meaning not including the 5 in the loop count)

for x in range(0,5):
    print(x)

print("\n----- Example 6: For Loop from -3 to 3")
#print from -3 to 3
for m in range(-3,4):
    print(m)

print("\n----- Example 7: for loop from 9 to 0")
#print from 9 to 1 decrement by 2
for n in range(9,0,-2):
    print(n)

print("\n----- Example 8: For Loop in a list -----")
animals = ["fish","cat","dog"]

for x in animals:
    print(x)

print("\n----- Example 9: While Loop -----")
#print from 1 to 5 --> 1 2 3 4 5
n = 1
while n <= 5:
    print(n)
    if n==3:
        break
    n += 1

else:
    print("End of program")