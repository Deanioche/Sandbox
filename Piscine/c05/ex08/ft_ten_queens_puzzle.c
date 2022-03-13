/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_ten_queens_puzzle.c                             :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: dohyulee <dohyulee@student.42seoul.kr>     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/09/25 18:49:37 by dohyulee          #+#    #+#             */
/*   Updated: 2021/09/26 15:24:04 by dohyulee         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */
#include <unistd.h>

int	ft_abs(int a, int b)
{
	if (a < b)
		return (b - a);
	else
		return (a - b);
}

void	print_arr(int *b)
{
	int		i;
	char	c;

	i = 0;
	while (i < 10)
	{
		c = b[i] + '0';
		write(1, &c, 1);
		i++;
	}
	write(1, "\n", 1);
}

int	validate_queen(int *arr, int d, int i)
{
	int	x;

	x = 0;
	while (x < d)
	{
		if (ft_abs(d, x) == ft_abs(i, arr[x]) || arr[x] == i)
			return (0);
		x++;
	}	
	return (1);
}

void	recursive_puzzle(int d, int *count, int *arr)
{
	int	i;

	if (d == 10)
	{
		(*count)++;
		print_arr(arr);
		return ;
	}
	i = 0;
	while (i < 10)
	{
		if (validate_queen(arr, d, i))
		{
			arr[d] = i;
			recursive_puzzle(d + 1, count, arr);
		}
		i++;
	}
}

int	ft_ten_queens_puzzle(void)
{
	int	count;
	int	arr[10];

	count = 0;
	recursive_puzzle(0, &count, arr);
	return (count);
}
