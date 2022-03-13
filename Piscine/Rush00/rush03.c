/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   rush03.c                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: sangmlee <sangmlee@student.42seoul.kr>     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/09/12 09:59:00 by sangmlee          #+#    #+#             */
/*   Updated: 2021/09/12 20:50:55 by dohyulee         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

void	ft_putchar(char c);

void	ft_print_with_condition(int x, int y, int row, int col)
{
	if (row == 0)
	{
		if (col == 0)
			ft_putchar('A');
		else if (col == x - 1)
			ft_putchar('C');
		else
			ft_putchar('B');
	}
	else if (row == y - 1)
	{
		if (col == 0)
			ft_putchar('A');
		else if (col == x - 1)
			ft_putchar('C');
		else
			ft_putchar('B');
	}
	else
	{
		if (col == 0 || col == x - 1)
			ft_putchar('B');
		else
			ft_putchar(' ');
	}
}

void	rush(int x, int y)
{
	int	row;
	int	col;

	if (x == 0 || y == 0)
		return ;
	row = 0;
	while (row < y)
	{
		col = 0;
		while (col < x)
		{
			ft_print_with_condition(x, y, row, col);
			col++;
		}
		ft_putchar('\n');
		row++;
	}
}
