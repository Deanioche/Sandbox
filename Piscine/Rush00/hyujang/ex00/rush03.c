/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   rush03.c                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: hyujang <hyujang@42seoul.kr>               +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/02/06 16:27:48 by hyujang           #+#    #+#             */
/*   Updated: 2022/02/06 16:52:27 by hasuh            ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include <unistd.h>

void ft_putchar(char c);

void print_head(int col, int x)
{
	while (col <= x)
	{
		if (col == 1)
			ft_putchar('A');
		else if (col == x)
			ft_putchar('C');
		else
			ft_putchar('B');
		col++;
	}
	ft_putchar('\n');
	return;
}

void print_middle(int col, int x)
{
	while (col <= x)
	{
		if (col == 1 || col == x)
			ft_putchar('B');
		else
			ft_putchar(' ');
		col++;
	}
	ft_putchar('\n');
	return;
}

void print_tail(int col, int x)
{
	while (col <= x)
	{
		if (col == 1)
			ft_putchar('A');
		else if (col == x)
			ft_putchar('C');
		else
			ft_putchar('B');
		col++;
	}
	ft_putchar('\n');
	return;
}

void rush(int x, int y)
{
	int row;
	int col;

	if (x <= 0 || y <= 0)
	{
		write(1, "ERROR!!\narguments must be positive integer\n", 43);
		return;
	}
	row = 1;
	col = 1;
	while (row <= y)
	{
		if (row == 1)
			print_head(col, x);
		else if (row < y)
			print_middle(col, x);
		else
			print_tail(col, x);
		col = 1;
		row++;
	}
}
