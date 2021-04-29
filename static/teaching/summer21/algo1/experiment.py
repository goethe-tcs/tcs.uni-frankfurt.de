#!/usr/bin/env python3
# Perform a simple doubling experiment, measure the time in nanoseconds

from time import process_time_ns


def f(L, n):
    """The function we want to measure the running time of"""
    a = n // 3
    b = 2 * n // 3
    return L[a:b]


n = 1
prev_duration = 1
trials = 50000

while True:
    L = list(range(n))
    start = process_time_ns()
    for _ in range(trials):
        f(L, n)
    duration = (process_time_ns() - start) / trials
    ratio = duration / prev_duration
    print(f"{n:<12} {int(duration):<12} {ratio:.2f}")
    n *= 2
    prev_duration = duration
