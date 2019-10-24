# MatTableProblems
Shows issues with deleting and adding rows in certain sequences

Steps to reproduce issue:
1) Add a new row set Sunday to 1
2) Add another row and set Sunday to 2
3) Delete first row - now there will be one row with Sunday=2 as expected
4) Add a new row.  
Expected behaviour - new row is added and first row Sunday value = 2.
Actual behaviour - new row is added but first row has been reset to 0.
